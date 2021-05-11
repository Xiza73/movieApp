import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const {
        movie
    } = props

    return (
        <div className="col-md-4 col-sm-6 my-2">
            <div className="card h-100">
                <img src={movie.Poster} alt={movie.Title} className="card-img-top"/>
                <div className="card-body">
                    <h4>{movie.Title} {movie.Year}</h4>
                    <p>{movie.Type}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string
    })
}

export default Card;
