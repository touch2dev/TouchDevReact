import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({text }) => {
    return (
        <button>
            {text}
        </button>
    );
};

export default Button;