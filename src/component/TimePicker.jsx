import React, { useState } from "react";
import color from "../config/color";

function TimePicker({ times }) {
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

    const handleSelect = (time) => setSelectedTime(time);

    return (
        <div style={{ display: "flex" }}>
            {times.map((time) => (
                <div
                    onClick={() => handleSelect(time.time)}
                    style={
                        selectedTime && selectedTime === time.time
                            ? { ...styles.cardContainer, ...styles.isSelected }
                            : styles.cardContainer
                    }
                >
                    {time.time}
                </div>
            ))}
        </div>
    );
}

export default TimePicker;
