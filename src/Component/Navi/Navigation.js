import React from 'react';

const Navigation = () => {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p className='f5 link dim black underline pa3 pointer'> Sign In </p>
                    <p className='f5 link dim black underline pa3 pointer'> Register</p>
                </nav> 
            );
};

export default Navigation;