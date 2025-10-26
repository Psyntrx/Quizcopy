import React from "react";

function Results({ score, total, onRestart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Results</h1>
        <p className="text-xl text-gray-700 mb-6">
          You scored{" "}
          <span className="text-blue-600 font-semibold">
            {score} / {total}
          </span>
        </p>
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition-transform"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Results;
