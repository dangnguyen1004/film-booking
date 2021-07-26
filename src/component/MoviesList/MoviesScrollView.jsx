import React from 'react';
import color from '../../config/color';
import './MoviesList.css'

function MoviesScrollView({ movies }) {

    return (
        <div className="list-container">
            {movies.map(movie => (
                <div className='movie'>
                    <img className="movie__img" src={movie.poster} alt="Avatar" />
                    <div className="movie__title">{movie.title}</div>
                </div>
            ))}
        </div>

    );
}


export default MoviesScrollView;