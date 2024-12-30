import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { GitHubErrorProps } from './types';

export default function GitHubError({ message }: GitHubErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{message}</p>
    </div>
  );
}