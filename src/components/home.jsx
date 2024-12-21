import React,{useEffect, useState} from "react";
import imgUrl from '../assets/images/forrest-gump.png'
import Footer from "./footer";
import CustomMarquee from "./customMarquee";
import Header from "./header"
import { Link, useNavigate } from "react-router-dom";
import { topRatedMovies } from "./data";
export default function Home({movie,setMovie}){
    const [topMovies, setTopMovies] = useState([])
    const navigate = useNavigate();
    const apiKey = import.meta.env.VITE_API_KEY;


    function handleSubmit(e){
        e.preventDefault()
        
        navigate('/results');

    }

    
    
    function handleChange(e){
        setMovie(e.target.value)
    }

    useEffect(()=>{
        // const fetchMovieDetails = async (movies) => {
        //     const updatedMovies = await Promise.all(
        //       movies.map(async (movie) => {
        //           const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`);
        //           const data = await response.json();
        //           return { ...movie, poster: data.Poster };  
        //       })
        //     );
        //     return updatedMovies;
        //   };
        // fetchMovieDetails(topRatedMovies).then((updatedMovies) => console.log(updatedMovies));
        setTopMovies(topRatedMovies)
    },[])
    const topMoviesElement = topMovies.map((item)=>(
        <div key={item.imdbID} >
            <Link to={`/${item.imdbID}`}>
                <div className="movie-tile">
                    <img src={item.poster} alt="Movie Poster" className="movie-poster" />
                    <div className="movie-details">
                        <h3 className={item.Title}>{item.title}</h3>
                        <p className="movie-year">Released: {item.year}</p>
                    </div>
                </div>
            </Link>
        </div>
    ))
    return (
        <div className="home-page">
            <Header/>
            <div className="form-div">
                <form action="" onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" className="search-field" placeholder="Search for a movie..."/>    
                    <button type="submit" className="search-btn">Search</button>
                    
                </form>
            </div>
            <CustomMarquee/>
            <div className="search-heading"><h1>Top Rated Films</h1></div>
            <div id="movie-container">
                {topMoviesElement}
            </div>
            <Footer/>
        </div>
    )
}