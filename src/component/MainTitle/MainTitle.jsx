import React from 'react';
import './MainTitle.css'

function MainTitle(props) {
    return (
        <div className='container'>
            <div className='top'>
                Top
            </div>
            <div className='title'>
                <div className='left'>
                    01
                </div>
                <div className='right'>
                    Harry Potter: Half-Blood Prince
                </div>
            </div>
        </div>
    );
}

export default MainTitle;