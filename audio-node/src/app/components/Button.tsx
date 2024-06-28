import React from 'react';

const Button = ({ text, onClick }: any) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
            <span className="mr-2">{text}</span>
            <img
                className="w-4 h-4"
                src="/images/arrow-forward.png"
                alt="arrow"
            />
        </button>
    )
};

export default Button;
