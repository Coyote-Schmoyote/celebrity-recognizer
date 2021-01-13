import React from 'react';
import './CelebName.css';

const CelebName = ({results}) => {
    if (results && results.length > 1){
        return ( 
            <div>
                <div className =" white f3">
            You look a lot like 
                </div>
                <div className = "white f1 mb4">
                    <a href={"https://www.google.com/images?q="+results} target="_blank" rel="noopener noreferrer">{results}</a>
                </div>
            </div>
        );
    } else {
        return (
            <div>
            <div className ="white f3">
        You look a lot like 
            </div>
            <div className = "white f1">
                ?
            </div>
        </div>
        );
    }
};



export default CelebName;