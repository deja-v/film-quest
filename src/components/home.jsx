import React,{useState} from "react";
import imgUrl from '../assets/images/forrest-gump.png'
import Footer from "./footer";
import CustomMarquee from "./customMarquee";
import Header from "./header"
import { Link, useNavigate } from "react-router-dom";
export default function Home({movie,setMovie}){
    
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        
        navigate('/results');

    }
    
    function handleChange(e){
        setMovie(e.target.value)
    }


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