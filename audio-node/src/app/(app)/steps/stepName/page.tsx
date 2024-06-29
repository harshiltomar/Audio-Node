import React from 'react';

const StepName = ({ onNext }: any) => {
    return (
        <>
            <div>Name component</div>
            <button onClick={onNext}>Next</button>
        </>
    );
};

export default StepName;