import React, { useState } from 'react';

const CalculatorBMI = () => {

    const [bmi, setBmi] = useState(0);
    const [height, setHeight] = useState(0);
    const [weigth, setWeight] = useState(0);

    const bmiCalc = () => {
        const heightC = height / 100;
        const bmiRes = weigth / (heightC * heightC);

        setBmi(bmiRes.toFixed(2));

    }

    return (
        <>
            <h1>BMI Calculator</h1>
            <label>
                Height:
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                <input type="number" value={weigth} onChange={(e) => setWeight(e.target.value)} />
                <button onClick={bmiCalc}>Calculate BMI</button>
                {bmi > 0 && (
                    <div>
                        <h2>Your BMI is: {bmi}</h2>
                        <p>Underweight: less than 18.5</p>
                        <p>Normal weight: 18.5 - 24.9</p>
                        <p>Overweight: 25 - 29.9</p>
                        <p>Obesity: 30 or greater</p>
                    </div>
                )}
            </label>
        </>
    );
}

export default CalculatorBMI;