import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { color, display } from "@mui/system";
import ContentModal from "./modal/contentModal";
export default function SearchResults({movie, movies,setMovies}){
    const apiKey = import.meta.env.VITE_API_KEY;
    
    const movieElements = movies.map((item)=>(
        <ContentModal key={item.imdbID} imdbID={item.imdbID}>
            {/* <Link to={`/results/${item.imdbID}`}> */}
                <div className="movie-tile">
                    <img src={item.Poster} alt="Movie Poster" className="movie-poster" />
                    <div className="movie-details">
                        <h3 className={item.Title}>{item.Title}</h3>
                        <p className="movie-year">Released: {item.Year}</p>
                    </div>
                </div>
            {/* </Link> */}
        </ContentModal>
    ))  

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
            .then(res => res.json())
            .then(data => setMovies(data.Search))
    },[])

    return (
        <>
            <Header/>
            <div className="search-heading">{movies? <h2>Search Results</h2>: <h2>No movies Found</h2>}</div>
            <div id="movie-container">
                {movieElements}
            </div>
            <Footer/>
        </>
    )
}