import React from 'react';

const StepOtp = ({ onNext }:any) => {
    return (
        <>
            <div>Otp component</div>
            <button onClick={onNext}>Next</button>
        </>
    );
};

export default StepOtp;