import React, { useState } from 'react';

const App = () => {

    const [input, setInput] = useState('');
    const calcBtns = [];

    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '%'].forEach((charItem) => {
        calcBtns.push(
            <button onClick={(e) => {
                setInput(input + e.target.value)
            }} value={charItem} key={charItem}>
                {charItem}
            </button>
        )
    })

    return (
        <>
            <div>{input}</div>
            <div>{calcBtns}</div>
            <button onClick={() => setInput(input.substr(0, input.length - 1))}>Clear</button>
            <button onClick={() => setInput('')} value={''}>AC</button>

            {/* Operators */}
            <button onClick={(e) => setInput(input + e.target.value)} value="+">+</button>
            <button onClick={(e) => setInput(input + e.target.value)} value="-">-</button>
            <button onClick={(e) => setInput(input + e.target.value)} value="*">*</button>
            <button onClick={(e) => setInput(input + e.target.value)} value="/">/</button>

            {/* Calculate */}
            <button onClick={(e) => {
                try {
                    setInput(
                        String(eval(input)).length > 3 &&
                            String(eval(input)).includes(".")
                            ? String(eval(input).toFixed(4))
                            : String(eval(input))
                    );
                } catch (e) {
                    console.log(e);
                }

            }} value="="> = </button>
        </>
    );
}

export default App;