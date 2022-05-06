import React from "react";
import Rate from "./Rate";
import './Search.css';
const SearchMovie = ({setSearchByTitle, searchByRate, setSearchByRate}) => {
   return(
   <div className="container-sm">
      <div className="search-box">
          <input type="text" 
          placeholder="Type to search"
          onChange={(e) => setSearchByTitle(e.target.value)}
          />
          <div className="star">
             <Rate setSearchByRate={setSearchByRate} rating={searchByRate} />
          </div>
      </div>
   </div>

);
};

  
  export default SearchMovie;