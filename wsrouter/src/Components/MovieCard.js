import React from 'react';
import './MovieCard.css';
import Rate from './Rate';



 const MovieCard = ( {movie } ) => {

    return(
     <div className="card">
        <div className="card_left">
          
       
          <img src={movie.posterUrl} alt="poster"/>
         
        </div>
        <div className="card_right">
          <h1>{movie.title}</h1>
          <div className="card_right__details">
            <ul>
              <li>{movie.date}</li>
              
              <div className='star'>
              <Rate rating={movie.rating}/>
              </div>
            </ul>
            <div className="card_right__review">
              <p>{movie.description}</p>
            </div>
           
            <div className="card_right__button">
              
             <button>WATCH TRAILER</button>
             
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default MovieCard;