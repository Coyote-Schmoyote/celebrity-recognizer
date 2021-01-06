import React from 'react';

const CelebName = ({ imageUrl}) => {
    return (
        <div className='center ma pb5 pt3'>
            <div className='fl w-50 mt2'>
            <img alt='' src={imageUrl} width='auto' height='200px' className="br-100"/>
            </div>
        </div>
    );
}

export default CelebName;