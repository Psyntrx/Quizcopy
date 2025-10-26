import React from "react";
import { BookOpen, Clock } from "lucide-react";

function QuizStart({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-3xl">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 mx-auto">
          <BookOpen className="w-12 h-12 text-blue-600" />
        </div>

        <h1 className="text-44px font-bold text-gray-800 mb-4">
          Carnot and Rankine Cycles Quiz
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Test your knowledge of Vapour Power Cycles under lecture 2 on
          Thermodynamics!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-800 mb-1">2</div>
            <div className="text-gray-700">Questions</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-800 mb-1">3:00</div>
            <div className="text-gray-700">Minutes</div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-8 py-3 rounded-xl shadow hover:scale-105 transition-transform"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizStart;
