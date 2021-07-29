import React from 'react';
import WeekendIcon from '@material-ui/icons/Weekend';
import { useState } from 'react';
import color from '../config/color';

function SeatPicker({ onSelectSeats }) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 60,
        },
        screen: {
            width: 550,
            height: 13,
            backgroundColor: '#c4c4c4',
            borderRadius: '15px 15px 0px 0px',
        },
    }

    const seats = [
        ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A14'],
        ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B14'],
        ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C14'],
        ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D14'],
        ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E14'],
        ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F14'],
        ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'G14', 'G15', 'G16'],
        ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H14', 'H15', 'H16'],
    ]
    const disabledSeats = ['B4', 'B5', 'B6', 'B7', 'B8', 'D4', 'D5', 'D6', 'D7', 'D8', 'E3', 'F9']
    const [selectedSeats, setSelectedSeats] = useState([])

    const handleSelect = (seat) => {
        if (!selectedSeats.includes(seat)) {
            const newSeats = [...selectedSeats, seat]
            setSelectedSeats(newSeats)
            onSelectSeats(newSeats)
        }
        else {
            const newSeats = selectedSeats.filter(s => s !== seat)
            setSelectedSeats(newSeats)
            onSelectSeats(newSeats)
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.screen}></div>

            <div
                style={{
                    marginTop: 100,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {seats.map((row) => (
                    <div key={row[0] + row[1]} style={{ margin: "5px 0px" }}>
                        {row.map((seat) => (
                            <span key={seat}>
                                {disabledSeats.includes(seat) ? (
                                    <WeekendIcon
                                        fontSize="large"
                                        style={{ margin: "0px 2px" }}
                                        htmlColor={color.lightGrey}
                                    ></WeekendIcon>
                                ) : (
                                    <WeekendIcon
                                        onClick={() => handleSelect(seat)}
                                        fontSize="large"
                                        style={{ margin: "0px 2px" }}
                                        htmlColor={
                                            selectedSeats.includes(seat)
                                                ? color.primary
                                                : color.white
                                        }
                                    ></WeekendIcon>
                                )}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeatPicker;