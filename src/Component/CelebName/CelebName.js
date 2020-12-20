import React from 'react';

const CelebName = ({results}) => {
    if (results && results.length > 1){
        return ( 
            <div>
                <div className =" white f3">
            You look a lot like 
                </div>
                <div className = "white f1">
                    {results}
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