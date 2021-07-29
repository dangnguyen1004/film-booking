import React, { useState } from 'react';
import InformationDetailSection from '../component/InformationDetailSection';
import NavBar from '../component/NavBar/NavBar';
import BuyTicketSection from '../component/BuyTicketSection'
import './DetailPage.css'

function DetailPage(props) {
    const [film, setFilm] = useState({
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
        shows: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
        description: "The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people)."
    })

    const [actors, setACtors] = useState([
        {
            _id: 1,
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            _id: 2,
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            _id: 3,
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            _id: 4,
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            _id: 5,
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            _id: 6,
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            _id: 7,
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
        {
            _id: 8,
            name: 'Joe Smiling',
            avatar: 'https://picsum.photos/100/100'
        },
    ])

    return (
        <div className="main">
            <img src="https://picsum.photos/1920/1080" alt="background" style={{ width: '100%', position: 'absolute', zIndex: '0', height: 800, objectFit: 'cover' }} />
            <div className='cover-background'></div>
            <NavBar></NavBar>
            <div className='mother-container'>
                <InformationDetailSection film={film} actors={actors}></InformationDetailSection>
                <BuyTicketSection></BuyTicketSection>
            </div>
        </div>
    );
}

export default DetailPage;