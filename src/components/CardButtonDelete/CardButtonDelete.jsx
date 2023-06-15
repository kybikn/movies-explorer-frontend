import { React, useState } from 'react';

import './CardButtonDelete.css';
import cross from '../../images/cross.svg'

function CardButtonDelete() {
  const [isButtonActive, setButtonActive] = useState(false);

  function onButtonClick() {
    setButtonActive(!isButtonActive);
  }

  return (
    (<button
      className='card__button card__button_delete hover'
      onClick={onButtonClick}
    >
      <img src={cross} alt="Кнопка"></img>
    </button>)
  )
}

export default CardButtonDelete