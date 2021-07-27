import React from 'react';
import color from '../config/color';
import InfoTag from './InfoTag';
import TimeTag from './TimeTag'

function Information({ film, ...otherProps }) {
    const styleText = {
        marginBottom: 20,
        color: color.white,
        fontSize: 20,
        fontWeight: 400,
    }

    return (
        <div
            style={{
                fontSize: 20,
                fontWeight: 400,
                color: color.white
            }}
            {...otherProps}
        >
            <div style={styleText}>
                <span>{film.year}</span>
                <span style={{ marginLeft: 33 }}>{film.genres.join(", ")}</span>
            </div>
            <div style={{ marginBottom: 20 }}>
                <InfoTag>{film.format}</InfoTag>
                <InfoTag>{film.language}</InfoTag>
                <InfoTag>{film.subtitle}</InfoTag>
                <InfoTag>{film.run_time}</InfoTag>
            </div>
            <div style={styleText}>Sessions schedule:</div>
            <div style={{ display: "flex" }}>
                {film.shows.map((show) => (
                    <TimeTag key={show}>{show}</TimeTag>
                ))}
            </div>
        </div>
    );
}

export default Information;