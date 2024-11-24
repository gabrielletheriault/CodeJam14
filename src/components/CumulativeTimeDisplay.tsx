"use client";
import React, { useState } from "react";

const CumulativeTimer = ({ setTime }: { setTime: (time: number) => void }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Start the timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - elapsedTime;
      const intervalId = setInterval(() => {
        const newElapsedTime = Date.now() - startTime;
        setElapsedTime(newElapsedTime);
        setTime(newElapsedTime); // Update cumulative time
      }, 100);
      // Store the intervalId to clear it later
      return intervalId;
    }
  };

  // Stop the timer
  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(startTimer());
  };

  // Format time for display
  const formatTime = () => {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <p>{formatTime()}</p>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
    </div>
  );
};

export default CumulativeTimer;