import React from 'react';
import GitHubCard from './GitHubCard';
import GitHubError from './GitHubError';
import GitHubLoading from './GitHubLoading';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';

export default function GitHub() {
  const { repos, isLoading, isError } = useGitHubRepos('ManisaiGondrala');

  return (
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Repositories
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Check out some of my open source projects and contributions
          </p>
        </div>

        {isError && (
          <GitHubError message="Failed to load GitHub repositories. Please try again later." />
        )}

        {isLoading ? (
          <GitHubLoading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos.map((repo) => (
              <GitHubCard key={repo.name} repo={repo} />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://github.com/ManisaiGondrala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span>View more on GitHub</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}