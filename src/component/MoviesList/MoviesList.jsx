import React from 'react';
import MoviesScrollView from './MoviesScrollView';
import './MoviesList.css'

function MoviesList({ label, movies, ...otherProps }) {
    return (
        <div {...otherProps}>
            <div className="section__title">{label}</div>
            <MoviesScrollView movies={movies} />
        </div>
    );
}

export default MoviesList;