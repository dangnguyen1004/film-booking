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
import { useEffect } from 'react';
import { getFilm, getFilms, getShows, getShowsOfFilm } from '../services/filmsService'
import { useRef } from 'react';

function HomeScreen({ history }) {
    const [mainFilm, setMainFilm] = useState({
        id: 0,
        title: '',
        rating: 0,
        year: 2021,
        genres: ['Adventure', 'Fantasy', 'Comedy'],
        format: '2D, 3D',
        language: 'English',
        subtitle: 'Vietnamese',
        run_time: '90 mins',
        shows: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
    })
    const nowPlayingRef = useRef(null)
    const upComingRef = useRef(null)
    const allFilmsRef = useRef(null)

    const scrollToAllFilms = () => allFilmsRef.current.scrollIntoView()
    const scrollToUpComing = () => upComingRef.current.scrollIntoView()
    const scrollToUpNowPlaying = () => nowPlayingRef.current.scrollIntoView()

    const [allFilms, setAllFilms] = useState([])

    const  handleBuy =  async (id) => {
        const {data: shows} = await getShowsOfFilm(id)
        if (shows.length === 0) {
            window.alert('This film is not showing now')
            return
        }
        history.push(`/films/${id}`)
    }

    const getFilmsData = async () => {
        const { data } = await getFilms()
        console.log(data)
        setAllFilms(data)
    }



    const getShowsData = async () => {
        const { data } = await getShows()
        console.log(data[0])
        const film = data[0].film
        setMainFilm({
            id: film.id,
            title: film.title,
            rating: film.rating,
            year: 2021,
            genres: [film.genre.title],
            format: film.format,
            language: film.language,
            subtitle: 'Vietnamese',
            run_time: film.run_time,
            shows: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
        })
    }

    useEffect(() => {
        getFilmsData()
        getShowsData()
    }, [])


    return (
        <div className='main'>
            <img src="https://picsum.photos/1920/1080" alt="background" style={{ width: '100%', position: 'absolute', zIndex: '0', height: 800, objectFit: 'cover' }} />
            <div className='cover-background'></div>
            <NavBar history={history} onClickAllFilms={scrollToAllFilms} onClickNowPlaying={scrollToUpNowPlaying} onClickUpComing={scrollToUpComing}></NavBar>
            <div className='mother-container'>
                <MainTitle title={mainFilm.title} style={{ marginTop: 192, marginBottom: 17 }}></MainTitle>
                <StarsBar rate={mainFilm.rating} style={{ marginBottom: 28 }}></StarsBar>
                <LineBreak length={608}></LineBreak>

                <div className="information-container">
                    <div className='information-container__left'>
                        <Information film={mainFilm} style={{ marginTop: 15, marginBottom: 40 }}></Information>
                        <ButtonBuy onClick={() => handleBuy(mainFilm.id)}></ButtonBuy>
                    </div>

                    <div className="information-container__right">
                        {/* <Trailers style={{marginTop: 82, marginLeft: 122}}></Trailers> */}
                    </div>
                </div>
                <div ref={nowPlayingRef}>
                    <MoviesList onBuyFilm={handleBuy} label='NOW PLAYING' movies={allFilms} style={{ marginTop: 100 }}></MoviesList>
                </div>
                <div ref={allFilmsRef}>
                    <MoviesList onBuyFilm={handleBuy} label='ALL FILMS' movies={allFilms} style={{ marginTop: 100 }}></MoviesList>
                </div>
                <div ref={upComingRef}>
                    <MoviesList onBuyFilm={handleBuy} label='UPCOMING' movies={allFilms} style={{ marginTop: 100 }}></MoviesList>
                </div>
            </div>
        </div>

    );
}

export default HomeScreen;