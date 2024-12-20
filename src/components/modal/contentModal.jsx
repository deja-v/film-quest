import * as React from 'react';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "0%",
  p: 4,
};

export default function ContentModal({children, imdbID}) {
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => setOpen(false);
  const apiKey = import.meta.env.VITE_API_KEY;
    
  const [details, setDetails] = useState({});

  function handleOpen(){
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
        .then(res => res.json())
            .then(data => setDetails(data))
    
    setOpen(true)
  }
  
  const ratings = details.Ratings?details.Ratings.map((item)=>(
    (item.Source==="Internet Movie Database")?<p><strong>IMDb :</strong> {item.Value} </p>
    :(item.Source==="Metacritic")?<></>:<p><strong>{item.Source} :</strong> {item.Value} </p>
  )):<p></p>;
  return (
    <div>
      <Button className="movie" onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <div id="movie-details-container">
            <div className="poster-section">
                <img src={details.Poster} alt="Movie Poster" className="movie-poster" />
            </div>

            <div className="details-section">
                <h1 className="movie-title">{details.Title}</h1>
                <p className="movie-genre">Genre: {details.Genre}</p>
                <p className="movie-rated">Rated: {details.Rated}</p>
                <p className="movie-release-date">Released: {details.Released}</p>
                <p className="movie-runtime">Runtime: {details.Runtime}</p>
                <p className="movie-plot">Plot: {details.Plot}</p>

                <div className="additional-details">
                    <p><strong>Director:</strong> {details.Director}</p>
                    <p><strong>Writers:</strong> {details.Writer}</p>
                    <p><strong>Cast:</strong> {details.Actors}</p>
                </div>

                <div className="ratings">
                    {ratings}
                    {/* <p><strong>Rotten Tomatoes:</strong> {rotten}</p> */}
                </div>
            </div>
        </div>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}