import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {

    const [count, setCount] = useState(0);

    let handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <p style={{ fontSize: '25px', color: 'red' }}>{count}</p>
                <Button onClick={handleClick}>Counter</Button>
            </div>
        </>
    );
}

export default Counter;
