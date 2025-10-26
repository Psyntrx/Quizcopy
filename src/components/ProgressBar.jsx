import React from "react";

function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
