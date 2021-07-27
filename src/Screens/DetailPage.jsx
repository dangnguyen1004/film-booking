import React, { useState } from 'react';
import InformationDetailSection from '../component/InformationDetailSection';
import NavBar from '../component/NavBar/NavBar';
import './DetailPage.css'

function DetailPage(props) {
    const [film, setFilm] =useState({
        rating: 4,
        producer: 'John Smith',
        director: 'Honolulu',
        release: 'Jul 15, 2021',
        year: 2021,
        genres: ['Adventure', 'Fantasy', 'Comedy'],
        format: '2D, 3D',
        language: 'English',
        subtitle: 'Vietnamese',
        run_time: '90 mins',
        shows: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
    })

    const [actors, setACtors] = useState([
        {
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
    ])

    return (
        <div className="main">
            <img src="https://picsum.photos/1920/1080" alt="background" style={{ width: '100%', position: 'absolute', zIndex: '0' }} />
            <div className='cover-background'></div>
            <NavBar></NavBar>
            <div className='mother-container'>
                <InformationDetailSection film={film} actors={actors}></InformationDetailSection>
            </div>
        </div>
    );
}

export default DetailPage;