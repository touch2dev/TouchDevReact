'use client';
import React, { useState } from 'react';

const Terminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Process the input here
        setOutput(`You entered: ${input}`);
        setInput('');
    };

    return (
        <div>
            <pre>{output}</pre>
            <form onSubmit={handleFormSubmit}>
                <label>Enter a text:</label>
                <input type="text" className="text-black" value={input} onChange={handleInputChange} />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Terminal;