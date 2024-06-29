import React from 'react';

const StepUsername = ({ onNext }: any) => {
    return (
        <>
            <div>username component</div>
            <button onClick={onNext}>Next</button>
        </>
    );
};

export default StepUsername;