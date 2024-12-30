import React from 'react';
import type { GitHubLoadingProps } from './types';

export default function GitHubLoading({ count = 6 }: GitHubLoadingProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 animate-pulse"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-5" />
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          </div>
          <div className="mt-4 flex space-x-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}