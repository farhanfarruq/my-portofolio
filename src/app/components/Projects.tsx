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
    const headers: Record<string, string> = {};
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch('https://api.github.com/users/farhanfarruq/repos?sort=pushed&per_page=100', {
      next: { revalidate: 3600 },
      headers,
    });
    
    if (!res.ok) {
      return fallbackProjects;
    }

    const repos: GitHubRepo[] = await res.json();
    
    const formattedProjects = repos
      .filter((repo) => !repo.fork && repo.name !== 'farhanfarruq')
      .map((repo) => ({
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
    return fallbackProjects;
  }
}

export default async function Projects() {
  const projectsData = await getGithubProjects();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 overflow-hidden" id="projects">
      <ProjectsClient projects={projectsData} />
    </section>
  );
}
