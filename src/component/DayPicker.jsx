import React, { useState } from "react";
import color from "../config/color";

function DayPicker({days, onSelectDate}) {

    const styles = {
        cardContainer: {
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: color.white,
            border: "1px solid white",
            padding: "5px 13px",
            marginRight: 20,
            cursor: 'pointer'
        },
        day: {
            fontSize: 40,
            fontWeight: 300,
        },
        weekday: {
            fontSize: 15,
            fontWeight: 400,
        },
        isSelect: {
            border: "1px solid #FFC107",
        },
        disabled: {
            border: '1px solid #44444'
        }
    };

    const [selectedDay, setSelectedDay] = useState();
    const handleSelect = (day) => {
        setSelectedDay(day);
        onSelectDate(day)
    };

    return (
        <div style={{ display: "flex" }}>
            {days.map((day) => (
                <div
                    key={day.day}
                    onClick={() => handleSelect(day)}
                    style={
                        selectedDay && selectedDay.day === day.day
                            ? { ...styles.cardContainer, ...styles.isSelect }
                            : styles.cardContainer
                    }
                >
                    <div style={styles.day}>{day.day}</div>
                    <div style={styles.weekday}>{day.month}</div>
                </div>
            ))}
        </div>
    );
}

export default DayPicker;
