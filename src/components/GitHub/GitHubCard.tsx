import React from 'react';
import { Star, GitFork, ExternalLink, Globe, Clock } from 'lucide-react';
import type { GitHubCardProps } from './types';
import { formatDate } from '../../utils/github';

export default function GitHubCard({ repo }: GitHubCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{repo.name}</h3>
        <div className="flex space-x-2">
          {repo.homepage && (
            <a
              href={repo.homepage}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit project website"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
          <a
            href={repo.url}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View repository"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{repo.description || 'No description available'}</p>
      <div className="space-y-3">
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {repo.topics.map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center space-x-1">
              <Star className="w-4 h-4" />
              <span>{repo.stars}</span>
            </span>
            <span className="flex items-center space-x-1">
              <GitFork className="w-4 h-4" />
              <span>{repo.forks}</span>
            </span>
            {repo.language && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                {repo.language}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{formatDate(repo.updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}