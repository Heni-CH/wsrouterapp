import React, {useState} from 'react';
import { MoviesData } from './Components/MoviesData';
import './App.css';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie';
import Trailer from './Components/Trailer';
import SearchMovie from './Components/SearchMovie';
import { Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';





function App(){
const [searchByTitle, setSearchByTitle] = useState('');
const [searchByRate,setSearchByRate] = useState(1);
const [moviesList, setMoviesList]= useState(MoviesData);
  
const addMovie= (x) =>{
  setMoviesList([...moviesList, x])
}

  return(
   
      <div className='App'>
        <h1 style={{color:'red'}}>Hooked Movies</h1>
     
         
      
        <SearchMovie setSearchByTitle={setSearchByTitle} 
        searchByRate={searchByRate}
        setSearchByRate={setSearchByRate}
        />
       
    
      
      
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<MoviesList film={MoviesData} searchByRate={searchByRate} searchByTitle={searchByTitle}/>}/>
         <Route path='/:id' element={<Trailer film={MoviesData}/> }/>
       </Routes>
       </BrowserRouter>

       
      
   
      <div style={{display:'flex', justifyContent:'center'}}>
        <AddMovie addMovie={addMovie}/>
      </div>
  
   
      
</div> 


     
  );
  }
export default App;