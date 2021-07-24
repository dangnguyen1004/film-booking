import React from 'react';
import InfoTag from './InfoTag';
import TimeTag from './TimeTag'

function Information({ film }) {
    return (
        <div style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 400,

        }}>
            <div style={{marginBottom: 20}}>
                <span>{film.year}</span>
                <span style={{marginLeft: 33}}>
                    {film.genres.join(', ')}
                </span>
            </div>
            <div style={{marginBottom: 20,}}>
                <InfoTag>{film.format}</InfoTag>
                <InfoTag>{film.language}</InfoTag>
                <InfoTag>{film.subtitle}</InfoTag>
                <InfoTag>{film.run_time}</InfoTag>
            </div>
            <div style={{marginBottom: 20,}}>Sessions schedule:</div>
            <div style={{display: 'flex'}}>
                {film.shows.map(show => (
                    <TimeTag key={show}>{show}</TimeTag>
                ))}
            </div>
        </div>
    );
}

export default Information;