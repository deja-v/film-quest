import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from './components/home'
import SearchResults from './components/searchResults'
import SearchMovie from './components/searchMovie'
function App() {
  const [movie, setMovie] = useState(localStorage.getItem("movie"));
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false)

    useEffect(()=>{
        localStorage.setItem("movie",movie)
    },[movie])


  return (
    
      <BrowserRouter>
          <Routes>
              <Route path="" element={<Home movie={movie} setMovie={setMovie} />}/>
              <Route path="/results" element={<SearchResults movie={movie} setMovie={setMovie} movies={movies} setMovies={setMovies}/>}/>
              <Route path="/results/:id" element={<SearchMovie/>}/>
              
          </Routes>
      </BrowserRouter>
    
  )
}

export default App
