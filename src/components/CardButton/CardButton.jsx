import { React } from 'react';

import CardButtonDelete from '../CardButtonDelete/CardButtonDelete';
import CardButtonSave from '../CardButtonSave/CardButtonSave';
import './CardButton.css';

function CardButton({ type }) {
  return (
    <>
      {type === 'allMovies'
        ? <CardButtonSave />
        : <CardButtonDelete />}
    </>
  )
}

export default CardButton