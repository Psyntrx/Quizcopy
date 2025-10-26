import React from "react";

function Questions({ question, currentIndex, total, onAnswer }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Question {currentIndex + 1} of {total}
      </h2>
      <p className="text-lg text-gray-700 mb-6">{question.text}</p>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full border border-gray-200 hover:border-blue-400 hover:bg-blue-50 rounded-lg py-3 px-4 text-left transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
