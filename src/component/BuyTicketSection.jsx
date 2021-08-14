import React from 'react';
import Cart from './Cart';
import DayPicker from './DayPicker';
import SeatPicker from './SeatPicker';
import TimePicker from './TimePicker';

function BuyTicketSection({ days, times, onSelectDate, onSelectTime, onSelectSeats, ...otherProps }) {
    const styles = {
        title: {
            fontSize: 15,
            fontWeight: 300,
            marginBottom: 20,
            marginTop: 20,
        }
    }

    const days_fake = [
        { day: 15, weekday: "MON", month: '07', year: 2021 },
        { day: 16, weekday: "TUE", month: '07', year: 2021 },
        { day: 17, weekday: "WED", month: '07', year: 2021 },
        { day: 18, weekday: "THU", month: '07', year: 2021 },
        { day: 19, weekday: "FRI", month: '07', year: 2021 },
    ];

    return (
        <div style={{ display: "flex", color: "white", marginTop: 160 }}>
            <div style={{ width: "50%" }}>
                <div style={styles.title}>Date:</div>
                <DayPicker days={days} onSelectDate={onSelectDate}></DayPicker>
                <div style={styles.title}>TIme</div>
                <TimePicker times={times} onSelectTime={onSelectTime}></TimePicker>
                <div style={styles.title}>Tickets</div>
                <Cart {...otherProps}></Cart>
            </div>
            <div style={{ width: "50%" }}>
                <SeatPicker onSelectSeats={onSelectSeats}></SeatPicker>
            </div>
        </div>
    );
}

export default BuyTicketSection;