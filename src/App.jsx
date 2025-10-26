import React, { useState } from "react";
import QuizStart from "./components/QuizStart";
import Questions from "./components/Questions";
import Results from "./components/Results";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";
import questionsData from "./data/questionsData";

function App() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questionsData[currentIndex].answer) {
      setScore((s) => s + 1);
    }

    if (currentIndex + 1 < questionsData.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentIndex(0);
    setScore(0);
    setCompleted(false);
  };

  const handleTimeUp = () => setCompleted(true);

  if (!started) return <QuizStart onStart={() => setStarted(true)} />;
  if (completed)
    return <Results score={score} total={questionsData.length} onRestart={handleRestart} />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <Timer duration={600} onTimeUp={handleTimeUp} />
      <ProgressBar current={currentIndex + 1} total={questionsData.length} />
      <Questions
        question={questionsData[currentIndex]}
        currentIndex={currentIndex}
        total={questionsData.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default App;
