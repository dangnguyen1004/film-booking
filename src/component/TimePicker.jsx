import React, { useState } from "react";
import color from "../config/color";

function TimePicker({ times, onSelectTime }) {
    const styles = {
        cardContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid white",
            padding: "5px 15px",
            fontSize: 15,
            fontWeight: 400,
            color: color.white,
            borderRadius: 15,
            marginRight: 17,
            cursor: 'pointer'
        },
        isSelected: {
            border: "1px solid #ffc107",
        },
    };

    const [selectedTime, setSelectedTime] = useState();

    const handleSelect = (time) => {
        onSelectTime(time);
        setSelectedTime(time)
    }

    return (
        <div style={{ display: "flex" }}>
            {times.map((time) => (
                <div
                    key={time}
                    onClick={() => handleSelect(time)}
                    style={
                        selectedTime && selectedTime === time
                            ? { ...styles.cardContainer, ...styles.isSelected }
                            : styles.cardContainer
                    }
                >
                    {time}
                </div>
            ))}
        </div>
    );
}

export default TimePicker;
