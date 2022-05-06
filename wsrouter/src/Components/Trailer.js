import React from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from 'react-youtube';


const Trailer = ({film}) =>{
    const {id} = useParams();
    let idmovie = Number (id);
    const movie = film.find((elem) => elem.id === idmovie);
  
   
    return(
        
      <div style={{display:'flex', justifyContent:'center'}}>
            <Link to='/'>
            <button>GO BACK </button>
            </Link>
            <div className="card" >
            <div className="card_left">
          
       
            <img src={movie.posterUrl} alt="poster"/>
         
        </div>
        <div className="card_right">
          <h1>{movie.title}</h1>
          <div className="card_right__details">
            <ul>
              <li>{movie.date}</li>
              
              
            </ul>
            <div className="card_right__review">
              <p>{movie.description}</p>
            </div>
           
           <iframe title="youtube " src={movie.link}/>
              
           
             
            </div>
            
        </div>
        
       </div>
      </div> 
       
    )
}
export default Trailer;