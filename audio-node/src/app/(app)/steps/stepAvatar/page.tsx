import React from 'react';

const StepAvatar = ({ onNext }: any) => {
    return (
        <>
            <div>Avatar component</div>
            <button onClick={onNext}>Next</button>
        </>
    );
};

export default StepAvatar;