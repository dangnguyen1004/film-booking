import React from 'react';
import Cart from './Cart';
import DayPicker from './DayPicker';
import TimePicker from './TimePicker';

function BuyTicketSection(props) {
    const styles = {
        title: {
            fontSize: 15,
            fontWeight: 300,
            marginBottom: 20,
            marginTop: 20,
        }
    }

    const days = [
        { day: 15, weekday: "MON" },
        { day: 16, weekday: "TUE" },
        { day: 17, weekday: "WED" },
        { day: 18, weekday: "THU" },
        { day: 19, weekday: "FRI" },
    ];
    
    const times = [
        {time: '09:00'},
        {time: '10:15'},
        {time: '13:40'},
        {time: '14:20'},
        {time: '16:00'},
        {time: '22:15'},
    ]

    return (
        <div style={{display: 'flex', color: 'white', marginTop: 160}}>
            <div style={{width: '50%'}}>
                <div style={styles.title}>Date:</div>
                <DayPicker days={days}></DayPicker>
                <div style={styles.title}>TIme</div>
                <TimePicker times={times}></TimePicker>
                <div style={styles.title}>Tickets</div>
                <Cart></Cart>
            </div>
            <div style={{width: '50%'}}>
            </div>
        </div>

    );
}

export default BuyTicketSection;