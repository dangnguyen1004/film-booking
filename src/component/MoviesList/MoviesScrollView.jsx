import React from 'react';
import './MoviesList.css'

function MoviesScrollView({ movies, onBuyFilm }) {
    const handleBuy = (id) => {
        onBuyFilm(id)
    }

    return (
        <div className="list-container">
            {movies.map(movie => (
                <div key={movie.id} className='movie' onClick={() => handleBuy(movie.id)} style={{cursor: 'pointer'}}>
                    <img className="movie__img" src={movie.poster} alt="Avatar" />
                    <div className="movie__title">{movie.title}</div>
                </div>
            ))}
        </div>

    );
}


export default MoviesScrollView;