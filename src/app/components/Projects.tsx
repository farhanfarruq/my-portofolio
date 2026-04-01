import SectionHeading from './ui/SectionHeading';
import ProjectsClient from './ProjectsClient';
import { projects as fallbackProjects } from '@/lib/data';

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
    // Add Authorization header if GITHUB_TOKEN is available in .env
    const headers: Record<string, string> = {};
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch('https://api.github.com/users/farhanfarruq/repos?sort=pushed&per_page=100', {
      next: { revalidate: 3600 }, // Cache for 1 hour to prevent rate limiting
      headers,
    });
    
    if (!res.ok) {
      console.error('Failed to fetch from GitHub API', await res.text());
      return fallbackProjects; // fallback if error (e.g. rate limit)
    }

    const repos: GitHubRepo[] = await res.json();
    
    // Filter out forks and the profile repository itself
    const formattedProjects = repos
      .filter((repo) => !repo.fork && repo.name !== 'farhanfarruq')
      .map((repo) => ({
        // Title formatting: replace dashes/underscores and capitalize words
        title: repo.name
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase()),
        description: repo.description || 'No description provided.',
        tags: repo.topics && repo.topics.length > 0 ? repo.topics : ['Repo'],
        github: repo.html_url,
        live: repo.homepage || '',
      }));

    if (formattedProjects.length === 0) return fallbackProjects;
    return formattedProjects;
  } catch (error) {
    console.error('Error fetching github projects:', error);
    return fallbackProjects;
  }
}

export default async function Projects() {
  const projectsData = await getGithubProjects();

  return (
    <section id="projects" className="py-24 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading index="04." title="Projects" />
        <ProjectsClient projects={projectsData} />
      </div>
    </section>
  );
}
