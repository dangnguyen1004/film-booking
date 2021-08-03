import React from 'react';
import { BiTimeFive } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import color from '../config/color';
import LineBreak from './LineBreak';

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

    return (
        <div style={styles.container}>
            <img src="https://picsum.photos/600/400" alt="ticket img" style={styles.background} />
            <div style={styles.coverBackground}></div>
            <div style={styles.content}>

                <div style={styles.title}>
                    Harry Potter: Half-Blood Prince
                </div>

                <div style={styles.datetimeContainer}>
                    <div style={styles.datetime}>
                        <BiTimeFive size={15} /> <span>18:30</span>
                    </div>
                    <div style={styles.datetime}>
                        <MdDateRange size={15} />{" "}
                        <span>
                            15.07.2021
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
                        <React.Fragment>
                            <tr>
                                <td style={styles.column}>2221</td>
                                <td style={styles.column}>04</td>
                                <td style={styles.column}>A13</td>
                                <td style={styles.column}>110.000vnd</td>
                            </tr>
                            <tr>
                                <td colSpan="5" style={{borderBottom: '1px solid #444444'}}>
                                </td>
                            </tr>
                        </React.Fragment>
                    </tbody>
                </table>

                <div style={styles.qrCode}>
                    <div>
                        Use QR code to pre-show ticket
                    </div>
                    <div>
                        <img style={{width: 90, height: 90,}} src="https://picsum.photos/100/100" alt="QR code" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;
