import React from 'react';
import color from '../config/color';

function LineBreak({ length, color = 'white' }) {
    const style = {
        width: length,
        height: 1,
        backgroundColor: color
    }

    return (
        <div style={style}>
        </div>
    );
}

export default LineBreak;