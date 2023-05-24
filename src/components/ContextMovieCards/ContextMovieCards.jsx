import { useEffect, useState } from "react";
import  get  from "../../data/httpClient";
import MoviesCard from "../MovieCard/MoviesCard";

import "../ContextMovieCards/contextMovieCards.css";

function ContextMovieCards() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
    .then((data) => {
      setMovies(data.results);
      console.log(data);
    })
    .catch((err) => console.log(err))
  }, []);
  return (
    <ul className="container">
      {movies.map((itemMovie) => (
        <MoviesCard key={itemMovie.id} itemMovie={itemMovie} />
      ))}
    </ul>
  );
}

export default ContextMovieCards;
