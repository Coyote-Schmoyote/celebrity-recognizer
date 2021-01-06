import React from 'react';
import './FaceComparison.css';

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

