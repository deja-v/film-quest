import React from "react";
import Header from "./header";
import Footer from "./footer";
export default function SearchResults({movies}){
    const movieElements = movies.map((item)=>{
        <div key={item.imdbID} className="movie-tile">
            <img src={item.Poster} alt="Movie Poster" className="movie-poster" />
            <div className="movie-details">
            <h3 className={item.Title}>Movie Title</h3>
            <p className="movie-year">Released: {item.Year}</p>
            </div>
        </div>
    }) 
    return (
        <>
            <Header/>
            <div className="search-heading"><h2>Search Results</h2></div>
            <div id="movie-container">
                {movieElements}

                <div className="movie-tile">
                    <img src="movie-poster-2.jpg" alt="Movie Poster" className="movie-poster" />
                    <div className="movie-details">
                    <h3 className="movie-title">Another Movie</h3>
                    <p className="movie-year">Released: 2021</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}