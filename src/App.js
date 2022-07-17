import logo from './logo.svg';
import './App.css';
import movies from "./data/movies.json"
import { MoviePoster } from './components/MoviePoster/MoviePoster';
import { Search } from './components/Search/Search';
import { useState } from 'react';

function App() {
  const [dispMovies, setDispMovies] = useState([]);
  const [searched,setSearched] = useState(false);
  return (
    <div className='App'>
      <h1>Movie Search</h1>
      <Search setDispMovies={setDispMovies} setSearched={setSearched}/>
      <div className='movies'>
        {/* {Object.entries(movies).map((movie) => dispMovies?.includes(movie[0]) ? (
          <MoviePoster movie={movie} key={movie[0]} />
        ): null)} */}
        {dispMovies.length != 0 && searched ? (Object.entries(movies).map((movie) => dispMovies?.includes(movie[0]) ? (
          <MoviePoster movie={movie} key={movie[0]} />
        ): null)): dispMovies.length == 0 && !searched ? (Object.entries(movies).map((movie) => <MoviePoster movie={movie} key={movie[0]} />))
        : null}
        {dispMovies.length == 0 && searched ? (<h1>No Results Found</h1>): null}
      </div>
    </div>
  );
}

export default App;
