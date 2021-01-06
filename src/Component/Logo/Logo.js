import React from 'react';
import Tilt from 'react-tilt';
import portrait from './portrait.png';

const Logo = () => {
    return (
        <div className = 'ma4'>
            <Tilt className="Tilt br4 shadow-3" options={{ max : 30, perspective: 200 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '0.1px'}} alt='logo' src={portrait}/></div>
            </Tilt>
        </div>
    
    );
}

export default Logo;