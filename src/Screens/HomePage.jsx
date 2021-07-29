import React, { useState } from 'react';
import NavBar from '../component/NavBar/NavBar';
import MainTitle from '../component/MainTitle/MainTitle'
import LineBreak from '../component/LineBreak'
import StarsBar from '../component/StarsBar';
import Information from '../component/Information'
import ButtonBuy from '../component/ButtonBuy'
import MoviesList from '../component/MoviesList/MoviesList'
import Trailers from '../component/Trailers';
import './HomePage.css'

function HomeScreen({history}) {
    const [mainFilm, setMainFilm] = useState({
        year: 2021,
        genres: ['Adventure', 'Fantasy', 'Comedy'],
        format: '2D, 3D',
        language: 'English',
        subtitle: 'Vietnamese',
        run_time: '90 mins',
        shows: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
    })

    const [nowPlayings, setNowPlayings] = useState([
        {
            _id: 1,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 2,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 3,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 4,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 5,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 6,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 7,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 8,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 9,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 10,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 11,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 12,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
        {
            _id: 13,
            title: "Fast and furious 9: The fast saga",
            poster: "https://picsum.photos/170/251"
        },
    ])

    const handleBuy = () => {
        console.log('Buy ticket')
        history.push('/films/1')
    }

    return (
        <div className='main'>
            <img src="https://picsum.photos/1920/1080" alt="background" style={{ width: '100%', position: 'absolute', zIndex: '0', height: 800, objectFit: 'cover' }} />
            <div className='cover-background'></div>
            <NavBar></NavBar>
            <div className='mother-container'>
                <MainTitle style={{ marginTop: 192, marginBottom: 17 }}></MainTitle>
                <StarsBar rate={4} style={{ marginBottom: 28 }}></StarsBar>
                <LineBreak length={608}></LineBreak>

                <div className="information-container">
                    <div className='information-container__left'>
                        <Information film={mainFilm} style={{ marginTop: 15, marginBottom: 40 }}></Information>
                        <ButtonBuy onClick={handleBuy}></ButtonBuy>
                    </div>

                    <div className="information-container__right">
                        {/* <Trailers style={{marginTop: 82, marginLeft: 122}}></Trailers> */}
                    </div>
                </div>

                <MoviesList label='NOW PLAYING' movies={nowPlayings} style={{ marginTop: 100 }}></MoviesList>
                <MoviesList label='NOW PLAYING' movies={nowPlayings} style={{ marginTop: 100 }}></MoviesList>
                <MoviesList label='NOW PLAYING' movies={nowPlayings} style={{ marginTop: 100 }}></MoviesList>
            </div>
        </div>

    );
}

export default HomeScreen;