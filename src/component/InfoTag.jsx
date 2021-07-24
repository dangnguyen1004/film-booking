import React from 'react';

function InfoTag({children}) {
    return (
        <span style={{
            borderRadius: 5,
            border: '1px solid white',
            padding: '6px 8px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 16,
            fontWeight: 400,
            fontStyle: 'normal',
            color: 'white',
            marginRight: 17
        }}>
            {children}
        </span>
    );
}

export default InfoTag;