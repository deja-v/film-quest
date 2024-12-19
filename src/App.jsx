import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from './components/home'
import SearchResults from './components/searchResults'
function App() {
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false)
  return (
    
      <BrowserRouter>
          <Routes>
              <Route path="/results" element={<SearchResults movies={movies}/>}/>
              <Route path="" element={<Home movies={movies} setMovies={setMovies} searched={searched} setSearched={setSearched}/>}/>
          </Routes>
      </BrowserRouter>
    
  )
}

export default App
