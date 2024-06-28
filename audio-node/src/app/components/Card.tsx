import React from 'react';

const Card = ({ title, icon, children }: any) => {
    return (
        <div className="bg-gray-900 rounded-lg p-6 w-500 max-w-90 mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
                {/**<img src={`/images/${icon}.png`} alt="logo" className="w-8 h-8" />*/}
                <h1 className="text-white text-2xl font-bold ml-2">{title}</h1>
            </div>
            {children}
        </div>
    );
};

export default Card;
