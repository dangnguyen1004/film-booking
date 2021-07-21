import React from 'react';
import logoUrl from '../../assets/logo.png'
import '../../App.css'
import color from '../../config/color'

function Logo({ onClick }) {
    return (
        <div style={{ display: 'flex', width: 245, alignItems: 'center', cursor: 'pointer' }} onClick={onClick}>
            <img style={{ height: 40, width: 40, marginRight: 8 }} src={logoUrl} alt="Logo" />
            <div className='font-bold' style={{ fontSize: 25, color: color.white }}>NHD MOVIES</div>
        </div>
    );
}

export default Logo;