import React from 'react';
import NavBar from '../component/NavBar/NavBar';
import MainTitle from '../component/MainTitle/MainTitle'
import './HomeScreen.css'

function HomeScreen(props) {
    return (
        <div className='main'>
            <NavBar></NavBar>
            <div className='mother-container'>
                <MainTitle style={{marginTop: 192}}></MainTitle>
            </div>
        </div>

    );
}

export default HomeScreen;