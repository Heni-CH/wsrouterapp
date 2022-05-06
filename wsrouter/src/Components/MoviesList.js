import React from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';
import { Link } from "react-router-dom";


const MoviesList =({ film, searchByTitle, searchByRate }) => {

  
  return(

    <div className="movies-list">
      {film
      .filter((el) =>
       el.title.toLowerCase().includes(searchByTitle.toLowerCase().trim()) 
       )
      
      .map((movie , i) => (
      <Link to={`/${movie.id}`}><MovieCard key={i} movie={movie}/></Link>
      ))}
    </div>
  );
};
export default MoviesList;