import { React, useEffect, useState } from 'react';

import CardButton from '../CardButton/CardButton';
import './MoviesCard.css';
import notFoundImg from '../../images/notfound.jpg';
import loadingImg from '../../images/loading-gif.gif';
import { createPortal } from 'react-dom';
import VideoPopup from '../VideoPopup/VideoPopup';


function MoviesCard({ nameRU, duration, trailerLink, imageUrl, like, movieId, onClick }) {
  const [cardImage, setCardImage] = useState(loadingImg);
  const [isVideo, setIsVideo] = useState(false);

  async function loadImage(imgUrl) {
    const image = new Image();
    image.onload = () => {
      setCardImage(imgUrl);
    };
    image.onerror = () => {
      setCardImage(notFoundImg);
    };
    image.src = imgUrl;
  }

  function handleClick() {
    onClick(movieId)
  }
  function handleVideoClose() {
    setIsVideo(false)
  }

  useEffect(() => {
    loadImage(imageUrl)
  }, [imageUrl]);



  return (
    <>{isVideo && createPortal(
      <VideoPopup
        url={trailerLink}
        name={nameRU}
        onClose={handleVideoClose}>youtubeVideo
      </VideoPopup>,
      document.getElementById('portal-root'))}
      <li>
        <figure className="card">
          <figcaption className="card__description">
            <h3 className="card__title">{nameRU}</h3>
            <p className="card__text">{duration} минут</p>
          </figcaption>
          <img
            className="card__img"
            src={cardImage}
            alt={nameRU}
            onClick={() => setIsVideo(true)}
          />
          <CardButton
            like={like}
            onClick={handleClick} />
        </figure>
      </li >
    </>

  )
}

export default MoviesCard