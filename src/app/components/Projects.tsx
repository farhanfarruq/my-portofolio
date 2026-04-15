import ProjectsClient from "./ProjectsClient";
import { projects as fallbackProjects } from "@/lib/data";
import { GlitchText } from "@/app/components/ui/GlitchText";

interface GitHubRepo {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage: string;
  fork: boolean;
  pushed_at: string;
}

// Fetch from GitHub
async function getGithubProjects() {
  try {
    const headers: Record<string, string> = {};
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      "https://api.github.com/users/farhanfarruq/repos?sort=pushed&per_page=100",
      {
        next: { revalidate: 3600 },
        headers,
      },
    );

    if (!res.ok) {
      return fallbackProjects;
    }

    const repos: GitHubRepo[] = await res.json();

    const formattedProjects = repos
      .filter((repo) => !repo.fork && repo.name !== "farhanfarruq")
      .map((repo) => ({
        title: repo.name
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        description: repo.description || "No description provided.",
        tags: repo.topics && repo.topics.length > 0 ? repo.topics : ["Repo"],
        github: repo.html_url,
        live: repo.homepage || "",
      }));

    if (formattedProjects.length === 0) return fallbackProjects;
    return formattedProjects;
  } catch (error) {
    return fallbackProjects;
  }
}

export default async function Projects() {
  const projectsData = await getGithubProjects();

  return (
    <section
      className="border-t border-primary/20 relative z-10 bg-surface/10"
      id="projects"
    >
      <div className="px-8 md:px-16 py-10 border-b border-primary/20 flex justify-between items-center bg-surface/20">
        <h2 className="font-display text-2xl text-tertiary tracking-[0.2em] uppercase">
          <GlitchText text="Active Operations" isBold />
        </h2>
        <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/30 uppercase hidden md:inline-block">
          // GitHub_Sync
        </span>
      </div>
      <div>
        <ProjectsClient projects={projectsData} />
      </div>
    </section>
  );
}
