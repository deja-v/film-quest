import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SearchMovie(){
    const params = useParams();
    const imdbID = params.id;
    const apiKey = import.meta.env.VITE_API_KEY;
    const [details, setDetails] = useState({});
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
            .then(res => res.json())
                .then(data => setDetails(data))
    },[])

    return (
        <div id="movie-details-container">
            <div className="poster-section">
                <img src={details.Poster} alt="Movie Poster" className="movie-poster" />
            </div>

            <div className="details-section">
                <h1 className="movie-title">{details.Title}</h1>
                <p className="movie-genre">Genre: {details.Genre}</p>
                <p className="movie-rated">Rated: {details.Rated}</p>
                <p className="movie-release-date">Released: {details.Released}</p>
                <p className="movie-runtime">Runtime: {details.Runtime}</p>
                <p className="movie-plot">Plot: {details.Plot}</p>

                <div className="additional-details">
                    <p><strong>Director:</strong> {details.Director}</p>
                    <p><strong>Writers:</strong> {details.Writer}</p>
                    <p><strong>Cast:</strong> {details.Actors}</p>
                </div>

                <div className="ratings">
                    <p><strong>IMDb Rating:</strong> {details.imdbRating} </p>
                    <p><strong>Rotten Tomatoes:</strong> </p>
                </div>
            </div>
        </div>


    )
}