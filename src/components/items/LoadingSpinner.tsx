'use client';
import React from 'react';
import { FaSpinner } from 'react-icons/fa';
const LoadingSpinner: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      role="progressbar"
    >
      <FaSpinner className="animate-spin text-purple-500 h-16 w-16" />
    </div>
  );
};
export default LoadingSpinner;
