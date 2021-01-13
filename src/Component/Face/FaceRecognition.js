import React from 'react';
import Tilt from 'react-tilt';

const CelebName = ({ imageUrl }) => {
    return (
        <div className='center ma pb5 pt3'>
            <div id="cf" className='fl w-50 mt4'>
            <Tilt className="Tilt" options={{ max : 15, perspective: 400, transition: true, }} >
                <img id="top" alt='' src={imageUrl} width='auto' height='200px' className="shadow-5 br-100 grow dib o-90"/> 
            </Tilt>
            </div>
        </div>
    );
}

export default CelebName;