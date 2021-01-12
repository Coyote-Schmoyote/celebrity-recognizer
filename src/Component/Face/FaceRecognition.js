import React from 'react';
import Tilt from 'react-tilt';

const CelebName = ({ imageUrl}) => {
    return (
        <div className='center ma pb5 pt3'>
            <div className='fl w-50 mt2'>
            <Tilt className="Tilt br4" options={{ max : 2, perspective: 20 }} >
                    <img alt='' src={imageUrl} width='auto' height='200px' className="shadow-5 br-100 grow dib o-90"/>
            </Tilt>
            </div>
        </div>
    );
}

export default CelebName;