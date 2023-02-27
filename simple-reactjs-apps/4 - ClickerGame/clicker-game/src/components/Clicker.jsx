import React, { useState } from 'react';

const Clicker = () => {

    const [score, setScore] = useState(0);
    const [seconds, setSeconds] = useState(10);

    React.useEffect(() => {
        const timer =
            seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <>
            <div>{score}</div>
            <button disabled={seconds === 0 ? true : false}
                onClick={() => setScore(score + 1)}>Click</button>

            <div>{seconds}</div>
        </>
    );
}

export default Clicker;

// button that counts our clicks and display
// when the timer is up, we cant click at button anymore
// and display the score