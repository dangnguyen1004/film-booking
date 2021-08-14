import React, { useState } from 'react';
import InformationDetailSection from '../component/InformationDetailSection';
import NavBar from '../component/NavBar/NavBar';
import BuyTicketSection from '../component/BuyTicketSection'
import './DetailPage.css'
import { useEffect } from 'react';
import { getFilm, getShows, getShowsOfFilm } from '../services/filmsService'
import { saveTicket } from '../services/ticketsService'
import { getCurrentUser } from '../services/authService'

function DetailPage({ match, history }) {
    const [user, setUser] = useState()
    const [film, setFilm] = useState({
        title: '',
        actors: [],
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
        description: "The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people)."
    })

    const [show, setShow] = useState()

    const [times, setTimes] = useState([])
    const [days, setDays] = useState([])
    const [selectedDate, setSelectedDate] = useState()
    const [selectedSeats, setSelectedSeats] = useState([])
    const [selectedTime, setSelectedTime] = useState()

    const handleSelectDate = (date) => {
        setSelectedDate(date)
    }
    const handleSelectSeats = (seats) => {
        setSelectedSeats(seats)
    }

    const handleSelectTime = (time) => {
        setSelectedTime(time)
    }

    const getDaysData = async (shows) => {
        const days = []
        shows.map(s => {
            const newDay = { year: s.date.substring(0, 4), month: s.date.substring(5, 7), day: s.date.substring(8, 11) }
            days.push(newDay)
        })
        setDays(days)
    }


    const getFilmData = async () => {
        const id = match.params.id
        const { data } = await getShowsOfFilm(id)
        console.log(data)
        setShow(data[0])
        getDaysData(data)
        if (data.length == 0) {
            window.alert('This film is not showing now')
            history.push('/home')
            return
        }
        setTimes([data[0].begin_time.substring(0, 5)])
        const film = data[0].film
        setFilm({
            title: film.title,
            actors: film.actors,
            rating: film.rating,
            producer: film.producer,
            director: film.director,
            release: film.release,
            year: 2021,
            genres: [film.genre.title],
            format: film.format,
            language: film.language,
            subtitle: film.language,
            run_time: `${film.run_time} mins`,
            description: film.description,
        })
    }

    const handleBuy = async () => {
        console.log(user)
        if (!user) {
            history.push('/login')
            return
        }
        if (!selectedDate)
            return window.alert('Please pick a date!')
        if (!selectedTime)
            return window.alert('Please pick a time!')
        if (selectedSeats.length === 0)
            return window.alert('No seat have been selected')
        if (window.confirm('Buy ticket')) {
            const seats = []
            selectedSeats.map(s => {
                seats.push({ row: s.substring(0, 1), seat_number: s.substring(1, 2), price: 110 })
            })
            const ticket = {
                show: show.id,
                user: user.id,
                total_price: seats.length * 110,
                seats: seats,
            }
            const { data, status } = await saveTicket(ticket)
            if (status === 201) {
                window.alert('Your ticket: ' + data.ticket_id)
                history.push('/account')
            }
        }
    }

    const getUser = async () => {
        const result = await getCurrentUser()
        if (result)
            setUser(result.data)
    }

    useEffect(() => {
        getUser()
        getFilmData()
    }, [])


    return (
        <div className="main">
            <img
                src="https://picsum.photos/1920/1080"
                alt="background"
                style={{
                    width: "100%",
                    position: "absolute",
                    zIndex: "0",
                    height: 800,
                    objectFit: "cover",
                }}
            />
            <div className="cover-background"></div>
            <NavBar history={history}></NavBar>
            <div className="detail-page__mother-container">
                <InformationDetailSection
                    film={film}
                    actors={film.actors}
                ></InformationDetailSection>
                <BuyTicketSection
                    days={days}
                    times={times}
                    onSelectDate={handleSelectDate}
                    onSelectSeats={handleSelectSeats}
                    onSelectTime={handleSelectTime}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    selectedSeats={selectedSeats}
                    onBuy={handleBuy}
                ></BuyTicketSection>
            </div>
        </div>
    );
}

export default DetailPage;