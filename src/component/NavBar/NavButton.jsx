import React from 'react';
import '../../App.css'
import './NavBar.css'

function NavButton({label, onClick}) {
    return (
        <div onClick={onClick} className='font-bold button' >
            {label}
        </div>
    );
}

export default NavButton;