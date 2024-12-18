import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from './components/home'
import SearchResults from './components/searchResults'
function App() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      {/* <Home />     */}
      <SearchResults movies={movies}/>
    </>
  )
}

export default App
