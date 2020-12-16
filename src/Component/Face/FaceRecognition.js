import React from 'react';

const CelebName = ({ imageUrl}) => {
    return (
        <div className='center ma'>
            <div className='fl w-50 mt2'>
            <img alt='' src={imageUrl} width='auto' height='300px'/>
            </div>
        </div>
    );
}

export default CelebName;