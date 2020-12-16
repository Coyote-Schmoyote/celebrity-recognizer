import React from 'react';

const Rank = ({results}) => {
const prediction = results.map((result) => {
const {ingredients}  = result;
return (
    <div>
        <li className="celebrityName">{ingredients}</li>
    </div>
);
});

if (prediction && prediction.length>1) {
    return (
         <div>
            <div className='white f3'>
                You look a lot like...
                </div>
            <div className='white f1'>
            {results}
            </div>
        </div>
        );
    } else {
        return (
            <div>
        
        </div>
        )
    }
};

export default Rank;