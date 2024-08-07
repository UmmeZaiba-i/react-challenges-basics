import React, { useState } from 'react';

export default function StopwatchTimer() {
    // A state to manage the display of the time
    const [time, setTime] = useState(0);
    // a State to know if the timer is running
    const [isRunning, setIsRunning] = useState(false);
    
    const [intervalId, setIntervalId] = useState(null);

    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIntervalId(id);
        }
    };

    const handleStop = () => {
        if (isRunning) {
            clearInterval(intervalId);
            setIsRunning(false);
            setIntervalId(null);
        }
    };

    const handleReset = () => {
        clearInterval(intervalId);
        setIsRunning(false);
        setTime(0);
        setIntervalId(null);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes} mins ${seconds} seconds`;
    };

    return (
        <div>
            <h1>Timer</h1>
            <span>{formatTime(time)}</span>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}
