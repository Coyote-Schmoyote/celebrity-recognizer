import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import portrait from './jackpot.png';

const Logo = () => {
    return (
        <div className = 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 30, perspective: 200 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '2.5px'}} alt='logo' src={portrait}/></div>
            </Tilt>
        </div>
    
    );
}

export default Logo;