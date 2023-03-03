import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker() {
    const [color, setColor] = useState('#ffffff');

    function handleChange(newColor) {
        setColor(newColor.hex);
    }

    return (
        <div>
            <h1>Color Picker</h1>
            <SketchPicker color={color} onChange={handleChange} />
            <p>Selected color: {color}</p>
            <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
        </div>
    );
}

export default ColorPicker;
