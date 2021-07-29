import React from 'react';
import color from '../config/color';
import { BiTimeFive } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import LineBreak from './LineBreak'
import Button from '@material-ui/core/Button';

function Cart({ selectedDate: date, selectedTime = 'Time', selectedSeats }) {
    const styles = {
        container: {
            width: 483,
            backgroundColor: color.grey,
            padding: '15px 15px',
        },
        title: {
            fontSize: 35,
            fontWeight: 700,
        },
        datetimeContainer: {
            margin: '15px 0px',
            display: 'flex'
        },
        datetime: {
            display: 'flex',
            alignItems: 'center',
            width: 90,
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
        button: {
            width: 140,
            height: 50,
            borderRadius: 5,
            backgroundColor: color.white,
            border: 'none',
            fontSize: 20,
            fontWeight: 500,

        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.title}>Harry Potter: Half-Blood Prince</div>
            <div style={styles.datetimeContainer}>
                <span style={styles.datetime}>
                    <BiTimeFive size={15} /> <span>{selectedTime}</span>
                </span>
                <span style={styles.datetime}>
                    <MdDateRange size={15} />{" "}
                    <span>
                        {date ? `${date.day}.${date.month}.${date.year}` : "Date"}
                    </span>
                </span>
            </div>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                    <tr style={styles.headerContainer}>
                        <td style={styles.header}>No</td>
                        <td style={styles.header}>Hall</td>
                        <td style={styles.header}>Seat</td>
                        <td style={styles.header}>Price</td>
                    </tr>
                    {selectedSeats.map((seat) => (
                        <React.Fragment key={seat}>
                            <tr>
                                <td style={styles.column}>2221</td>
                                <td style={styles.column}>04</td>
                                <td style={styles.column}>{seat}</td>
                                <td style={styles.column}>110.000vnd</td>
                            </tr>
                            <tr>
                                <td colSpan="5">
                                    <LineBreak length={450} color={color.lightGrey}></LineBreak>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            <div style={{ display: "flex" }}>
                <div
                    style={{
                        width: "40%",
                        display: "flex",
                        alignItems: "center",
                        height: 80,
                    }}
                >
                    <Button variant="contained" size="large">
                        Buy tickets
                    </Button>
                </div>
                <div
                    style={{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <span style={{ fontSize: 20, fontWeight: 500 }}>Grand total:</span>{" "}
                    <span
                        style={{
                            fontSize: 20,
                            fontWeight: 500,
                            color: color.primary,
                            marginLeft: 10,
                        }}
                    >
                        {`${selectedSeats.length * 110}.000`}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Cart;
