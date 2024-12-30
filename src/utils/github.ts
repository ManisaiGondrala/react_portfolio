const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubRepos(username: string) {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) throw new Error('Failed to fetch repositories');
    
    const repos = await response.json();
    return repos.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics,
      updatedAt: repo.updated_at
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}