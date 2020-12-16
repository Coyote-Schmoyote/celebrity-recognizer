import React from 'react';

const FaceComparison = ({celebrityName}) => {
        if (celebrityName){
            return (
            <div>
                <p>
                    {`You look a lot like ${celebrityName}`}
                </p>
            </div>)
        }
    return null; 
};

export default FaceComparison;

