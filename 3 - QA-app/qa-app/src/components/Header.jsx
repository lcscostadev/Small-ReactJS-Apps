import React from 'react';
import { player } from '../assets';

const Header = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1 style={{ color: '#ffbb00' }}>Random Quote generator</h1>
                <p style={{ fontSize: '18px' }}>&copy;lcscostadev</p>
                <img src={player} alt="player picture" style={{ width: '520px' }} />
            </div>
        </>
    );
}

export default Header;