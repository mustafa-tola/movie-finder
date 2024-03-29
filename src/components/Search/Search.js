import React, { useState } from 'react'
import "./Search.css"
import movies from "../../data/movies.json"


export const Search = ({ setDispMovies, setSearched }) => {
  const [search, setSearch] = useState("");
  const searchMovies = (e) => {
    e.preventDefault();
    let movieNames = Object.keys(movies).filter((movie) => search == movie.slice(0, search.length))
    setDispMovies(movieNames)
    setSearched(true)
  }
  return (
    <div>
      <input type="text" id='search' value={search} onChange={(e) => {
        setSearch(e.target.value); 
        if (e.target.value == "") {
          setSearched(false)
          setDispMovies([])
        }
      }} />
      <button id="btn" placeholder='Enter movie name' style={{ height: "25px" }} onClick={(e) => searchMovies(e)}><i className="fa fa-search"></i></button>
    </div>
  )
}
