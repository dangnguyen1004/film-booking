import React from 'react';
import color from '../config/color';

function TimeTag({ children }) {
    return (
        <div style={{
            border: '1px solid white',
            borderRadius: 15,
            fontSize: 16,
            fontWeight: 400,
            fontStyle: 'normal',
            color: color.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 70,
            height: 30,
            marginRight: 17
        }}>
            {children}
        </div>
    );
}

export default TimeTag;