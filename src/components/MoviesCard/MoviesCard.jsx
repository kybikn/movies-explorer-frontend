import { React, useEffect, useState } from 'react';

import CardButton from '../CardButton/CardButton';
import './MoviesCard.css';
import notFoundImg from '../../images/notfound.jpg';
import loadingImg from '../../images/loading-gif.gif';
import { Link } from 'react-router-dom';


function MoviesCard({ nameRU, duration, trailerLink, imageUrl, like, movieId, onClick }) {
  const [cardImage, setCardImage] = useState(loadingImg);

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

  useEffect(() => {
    loadImage(imageUrl)
  }, [imageUrl]);

  return (
    <li>
      <figure className="card">
        <figcaption className="card__description">
          <h3 className="card__title">{nameRU}</h3>
          <p className="card__text">{duration} минут</p>
        </figcaption>
        <Link
          to={trailerLink}
          target="_blank">
          <img
            className="card__img"
            src={cardImage}
            alt={nameRU}
          >
          </img>
        </Link>
        <CardButton
          like={like}
          onClick={handleClick} />
      </figure>
    </li >
  )
}

export default MoviesCard