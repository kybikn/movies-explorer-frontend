import { React, useState } from 'react';

import './CardButtonSave.css';
import check from '../../images/check.svg'

function CardButtonSave() {
  const [isButtonActive, setButtonActive] = useState(false);

  function onButtonClick() {
    setButtonActive(!isButtonActive);
  }

  return (
    isButtonActive
      ? (<button
        className='card__button card__button_save hover'
        onClick={onButtonClick}
        type='button'
      > <img src={check} alt="Кнопка"></img>
      </button>
      )
      : (<button
        className='card__button hover'
        onClick={onButtonClick}
      >Сохранить
      </button>)
  )
}

export default CardButtonSave