import { React, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './CardButton.css';
import check from '../../images/check.svg'
import cross from '../../images/cross.svg'

function CardButton() {
  const [isButtonActive, setButtonActive] = useState(false);

  const location = useLocation();

  const moviesPage = location.pathname === '/movies';

  function onButtonClick() {
    setButtonActive(!isButtonActive);
  }
  return (
    <>
      {moviesPage
        ? (<button
          className={`card__button ${isButtonActive ? 'card__button_save' : 'card__button_delete'} hover`}
          onClick={onButtonClick}
          type="button"
        >
          {isButtonActive ? <img src={check} alt='Кнопка'></img> : <p>Сохранить</p>}
        </button>
        )
        : (<button
          className="card__button card__button_delete hover"
        >
          <img src={cross} alt="Кнопка"></img>
        </button>)
      }
    </>
  )
}

export default CardButton