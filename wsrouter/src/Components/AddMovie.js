import React, {useState} from 'react';
import Modal from 'react-modal';
import './AddMovie.css'


const AddMovie = ({addMovie}) => {

  const [modalIsOpen,setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState(1);
  const [date,setDate] = useState('');
  const [link, setLink] = useState('');
  
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const hadleSubmit = ()=> {
      let newMovie = {
         
          title,
          posterUrl:"https://png.pngtree.com/background/20210710/original/pngtree-film-film-poster-background-material-picture-image_1055676.jpg",
          description,
          rating,
          date,
          link,
      };
      addMovie (newMovie);
      setIsOpen(false);
      setTitle('');
      setPosterUrl('');
      setDescription('');
      setRating(1);
      setDate('');
      setLink('');
  }

    return (
      <div>
        <button className = "add" onClick={openModal}>
         Add Movie
          </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal} >

            <div className='modal' >
          <h2 >Add a movie</h2>
          <button onClick={closeModal}>close</button>
          <form className='adding'>
              
              <label>Title</label>
              <input type = "text" name= "title" required
              value = {title}
              onChange= {(e) => setTitle(e.target.value)}
              />
              <label>Descrption</label>
              <input type = "text" name= "description" required
              value = {description}
              onChange= {(e) => setDescription(e.target.value)}
              />
              <label>Poster</label>
              <input type = "url" name= "poster" required
              value = {posterUrl}
              onChange= {(e) => setPosterUrl(e.target.value)}
              />
              <label>Trailer</label>
              <input type = "url" name= "trailer" required
              value = {link}
              onChange= {(e) => setLink(e.target.value)}
              />
              <label>Date</label>
              <input type = "date" name= "date" required
              value = {date}
              onChange= {(e) => setDate(e.target.value)}
              />
              <label>Rating</label>
              <input type = "string" name= "rating" required 
              min= "1" max= "5"
              value = {rating}
              onChange= {(e) => setRating(e.target.value)}
              />
              </form>
<button onClick ={hadleSubmit}> Add </button>


</div>
              </Modal>
              </div>
    );
}



export default AddMovie;



