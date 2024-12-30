import useSWR from 'swr';
import { fetchGitHubRepos } from '../utils/github';
import type { Repository } from '../components/GitHub/types';

export function useGitHubRepos(username: string) {
  const { data, error, isLoading } = useSWR<Repository[]>(
    `github-repos-${username}`,
    () => fetchGitHubRepos(username),
    {
      refreshInterval: 300000, // Refresh every 5 minutes
      revalidateOnFocus: true
    }
  );

  return {
    repos: data || [],
    isLoading,
    isError: error
  };
}