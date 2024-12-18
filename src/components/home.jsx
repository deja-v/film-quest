import React,{useState} from "react";
import imgUrl from '../assets/images/forrest-gump.png'
import Footer from "./footer";
import CustomMarquee from "./customMarquee";
import Header from "./header"
export default function Home({movies}){
    const [movie, setMovie] = useState({});
    
    const apiKey = import.meta.env.VITE_API_KEY;
    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
            .then(res => res.json())
            .then(data => setMovies(data.Search))
    }
    function handleChange(e){
        setMovie(e.target.value)
    }
    console.log(movies)
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
            <Footer/>
        </div>
    )
}