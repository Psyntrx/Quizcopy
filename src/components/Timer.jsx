import React, { useEffect, useState } from "react";

function Timer({ duration, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-xl font-medium text-gray-700 mb-4">
      Time Left:{" "}
      <span className="font-bold text-purple-700">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
}

export default Timer;
