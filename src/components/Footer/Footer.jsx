import React from 'react'
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <section className='footer' aria-label="Секция с сылками">
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__content'>
        <p className='footer__link'>© 2020</p>
        <ul className='footer__list'>
          <li>
            <Link className="footer__link"
              to="/">Яндекс.Практикум</Link>
          </li>
          <li>
            <Link className="footer__link"
              to="/">Github</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer