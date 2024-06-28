import React from 'react';
import Button from './Button';

const Card = ({ title, icon, children }: any) => {
    return (
        <div className="bg-neutral-900 rounded-t-lg p-6 text-center mt-32 mx-80">
            <div className="flex items-center justify-center mb-6">
                {icon? <img src={`/images/${icon}.png`} alt="logo" className="w-8 h-8" /> : <div>🚀</div>}
                <h1 className="text-white text-xl font-semibold ml-2">{title}</h1>
            </div>
            <div className='w-3/4 mx-auto font-light items-center'>
                {children}
            </div>
        </div>
    );
};

export default Card;
