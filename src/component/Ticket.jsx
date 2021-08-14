import React from 'react';
import { useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import color from '../config/color';
import LineBreak from './LineBreak';
import { getSeats } from '../services/seatsService'
import { useState } from 'react';

function Ticket({ ticket }) {
    const styles = {
        container: {
            width: 586,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        },
        background: {
            position: 'absolute',
            width: 568,
            height: 400,
            objectFit: 'cover',
        },
        coverBackground: {
            position: 'absolute',
            width: 568,
            height: 400,
            objectFit: 'cover',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
            padding: 15,
            zIndex: 2,
        },
        title: {
            fontSize: 35,
            fontWeight: 700,
            width: '55%',
        },
        datetimeContainer: {
            margin: '10px 0px',
            display: 'flex',
            gap: 20,
        },
        headerContainer: {
            width: '100%',
            backgroundColor: '#151515',
        },
        header: {
            height: 40,
            paddingLeft: 20,
            backgroundColor: '#151515',
        },
        column: {
            height: 40,
            paddingLeft: 20,
        },
        qrCode: {
            width: '95%',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 25,
        }
    }

    const [seats, setSeats] = useState([])
    const getSeatsData = async () => {
        const { data } = await getSeats(ticket.id)
        setSeats(data)
        console.log(data)
    }

    useEffect(() => {
        getSeatsData()
    }, [])

    return (
        <div style={styles.container}>
            <img src="https://picsum.photos/600/400" alt="ticket img" style={styles.background} />
            <div style={styles.coverBackground}></div>
            <div style={styles.content}>

                <div style={styles.title}>
                    {ticket.show.film.title}
                </div>

                <div style={styles.datetimeContainer}>
                    <div style={styles.datetime}>
                        <BiTimeFive size={15} /> <span>{ticket.show.begin_time.substring(0, 5)}</span>
                    </div>
                    <div style={styles.datetime}>
                        <MdDateRange size={15} />{" "}
                        <span>
                            {ticket.show.date}
                        </span>
                    </div>
                </div>

                <table style={{ borderCollapse: "collapse", width: '95%', }}>
                    <tbody>
                        <tr style={styles.headerContainer}>
                            <td style={styles.header}>No</td>
                            <td style={styles.header}>Hall</td>
                            <td style={styles.header}>Seat</td>
                            <td style={styles.header}>Price</td>
                        </tr>
                        {seats.map(s => (
                            <React.Fragment key={s.id}>
                                <tr>
                                    <td style={styles.column}>{s.id}</td>
                                    <td style={styles.column}>{ticket.show.hall.name}</td>
                                    <td style={styles.column}>{`${s.row}${s.seat_number}`}</td>
                                    <td style={styles.column}>{`${s.price}.000 vnd`}</td>
                                </tr>
                                <tr>
                                    <td colSpan="5" style={{ borderBottom: '1px solid #444444' }}>
                                    </td>
                                </tr>
                            </React.Fragment>

                        ))}

                    </tbody>
                </table>

                <div style={styles.qrCode}>
                    <div>
                        Use QR code to pre-show ticket
                    </div>
                    <div>
                        <img style={{ width: 90, height: 90, }} src="https://cdn.printgo.vn/uploads/media/790919/tao-ma-qr-code-san-pham-1_1620927223.jpg" alt="QR code" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;
