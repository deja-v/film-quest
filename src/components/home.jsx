import React,{useState} from "react";
import imgUrl from '../assets/images/forrest-gump.png'

import CustomMarquee from "./customMarquee";
export default function Home(){
    const [movie, setMovie] = useState()
    function handleSubmit(e){
        e.preventDefault()
        console.log(movie)
    }
    function handleChange(e){
        setMovie(e.target.value)
    }
    return (
        <div className="home-page">
            <header className="header-banner">
                <div className="overlay">
                    <h1 className="heading">Film Quest</h1>
                </div>
            </header>
            <div className="form-div">
                <form action="" onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" className="search-field" placeholder="Search for a movie..."/>
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>
            <CustomMarquee/>
        </div>
    )
}