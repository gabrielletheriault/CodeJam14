"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

function Stopwatch() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
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

    const trash = () => {
        if (!isRunning) {
            setElapsedTime(0);
        }
    };

    const record = () => {
        if (!isRunning) {
        }
    };

    return (
        <div>
            <p>{formatTime()}</p>
            <Button onClick={start}>Start</Button>
            <Button onClick={stop}>Stop</Button>
            <div style={{ marginTop: "10px" }}></div>
            <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
            <div style={{ marginTop: "10px" }}></div>
            <Button onClick={trash}>Trash</Button>
            <Button onClick={record}>Record</Button>

        </div>
    );
}

export default Stopwatch;
