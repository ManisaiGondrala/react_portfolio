export interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  homepage?: string;
  topics?: string[];
  updatedAt: string;
}

export interface GitHubCardProps {
  repo: Repository;
}

export interface GitHubErrorProps {
  message: string;
}

export interface GitHubLoadingProps {
  count?: number;
}