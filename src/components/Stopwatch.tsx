"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

function Stopwatch() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showSubButtons, setShowSubButtons] = useState(false); // For toggling sub-buttons visibility
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const stop = () => {
        if (isRunning) {
            setIsRunning(false);
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
                intervalIdRef.current = null;
            }
        }
    };

    useEffect(() => {
        if (isRunning) {
            const startTime = Date.now() - elapsedTime;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 10);
        }

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [isRunning, elapsedTime]);

    const formatTime = () => {
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const reset = () => {
        if (!isRunning) {
            setElapsedTime(0);
        }
    };

    const toggleSubButtons = () => {
        setShowSubButtons((prev) => !prev);
    };

    const handleSubButtonClick = (activity: string) => {
        // Check if the timer is not running
        if (!isRunning) {
            setElapsedTime(0); // Reset the elapsed time
        }
        //çalert(`Tracking: ${activity}`);
    };

    return (
        <div>
            <p style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "30px" }}>
                {formatTime()}
            </p>

            <div style={{ marginTop: "50px" }}></div>

            <div style={{ display: "flex", gap: "15px" }}>
                <Button className="text-lg px-20 py-6" onClick={start}>Start</Button>
                <Button className="text-lg px-20 py-6" onClick={stop}>Stop</Button>
                <Button className="text-lg px-20 py-6" onClick={reset}>Reset</Button>

                {/* Track button with sub-buttons */}
                <div style={{ position: "relative" }}>
                    <Button 
                        className="text-lg px-20 py-6" 
                        onClick={toggleSubButtons}
                    >
                        Track
                    </Button>

                    {showSubButtons && (
                        <div 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                marginTop: "10px",
                            }}
                        >
                            {/* Sub-buttons with hover effect */}
                            <Button 
                                className="text-lg px-10 py-4" 
                                style={{
                                    backgroundColor: "#D1C4E9",
                                    color: "#4A148C",
                                    transition: "background-color 0.3s ease",
                                }}
                                onClick={() => handleSubButtonClick("Studying")}
                                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#B39DDB"} // Darker purple
                                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#D1C4E9"} // Darker purple
                            >
                                Studying
                            </Button>
                            <Button 
                                className="text-lg px-10 py-4" 
                                style={{
                                    backgroundColor: "#D1C4E9",
                                    color: "#4A148C",
                                    transition: "background-color 0.3s ease",
                                }}
                                onClick={() => handleSubButtonClick("Exercise")}
                                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#B39DDB"} // Darker purple
                                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#D1C4E9"} // Darker purple
                            >
                                Exercise
                            </Button>
                            <Button 
                                className="text-lg px-10 py-4" 
                                style={{
                                    backgroundColor: "#D1C4E9",
                                    color: "#4A148C",
                                    transition: "background-color 0.3s ease",
                                }}
                                onClick={() => handleSubButtonClick("Hobbies")}
                                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#B39DDB"} // Darker purple
                                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#D1C4E9"} // Darker purple
                            >
                                Hobbies
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;