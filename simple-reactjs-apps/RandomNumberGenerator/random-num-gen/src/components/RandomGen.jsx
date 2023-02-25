import React, { useState } from 'react';

const RandomGen = () => {

    const [genNum, setGenNum] = useState(null);

    const generator = () => {
        const randNumber = Math.floor(Math.random() * 100) + 1;
        setGenNum(randNumber);
    }

    return (
        <>
            <div>{genNum}</div>
            <button onClick={generator}>Generate</button>
        </>
    );
}

export default RandomGen;

