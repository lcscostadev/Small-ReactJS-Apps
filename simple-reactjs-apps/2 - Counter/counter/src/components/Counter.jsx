import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>

            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </>
    );
}

export default Counter;