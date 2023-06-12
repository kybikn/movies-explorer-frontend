import React from 'react'

import NavTab from '../NavTab/NavTab';
import './Promo.css'
import promologo from '../../images/promologo.png'

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div>
          <h1 className="promo__title">Учебный проект студента факультета Веб‑разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className="promo__img" src={promologo} alt="Земной шар"></img>
      </div>
      <NavTab />
    </section >
  );
}


export default Promo;