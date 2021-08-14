import React from 'react';
import MoviesScrollView from './MoviesScrollView';
import './MoviesList.css'

function MoviesList({ label, movies, onBuyFilm, ...otherProps }) {
    return (
        <div {...otherProps}>
            <div className="section__title">{label}</div>
            <MoviesScrollView movies={movies} onBuyFilm={onBuyFilm} />
        </div>
    );
}

export default MoviesList;