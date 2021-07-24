import React from 'react';
import color from '../config/color';

function LineBreak({ length }) {
    const style = {
        width: length,
        height: 1,
        backgroundColor: color.white
    }

    return (
        <div style={style}>
        </div>
    );
}

export default LineBreak;