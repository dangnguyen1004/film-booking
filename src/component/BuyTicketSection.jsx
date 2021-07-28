import React from 'react';
import DayPicker from './DayPicker';

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

    return (
        <div style={{display: 'flex', color: 'white', marginTop: 160}}>
            <div style={{width: '50%'}}>
                <div style={styles.title}>Date:</div>
                <DayPicker days={days}></DayPicker>
                <div style={styles.title}>TIme</div>
                {/* pick time */}
                <div style={styles.title}>Tickets</div>
                {/* order */}
            </div>
            <div style={{width: '50%'}}>
            </div>
        </div>
    );
}

export default BuyTicketSection;