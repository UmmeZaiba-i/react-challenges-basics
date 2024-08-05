import React, { useState } from 'react';

export default function ToggleText2() {
    const initialState = "Welcome to React Challenges";
    const hiddenState = ""; // When text is hidden, set it to an empty string or any other placeholder

    // state - which holds the current text to display
    const [text, setText] = useState(initialState);

    // function to toggle the text
    const handleButtonChange = () => {
        setText(prevText => (prevText === initialState ? hiddenState : initialState));
    };

    return (
        <div>
            <button onClick={handleButtonChange}>Show/Hide</button>
            <h1>{text}</h1>
        </div>
    );
}
