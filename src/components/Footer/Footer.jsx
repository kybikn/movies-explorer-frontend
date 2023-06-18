import React from 'react'

import { footerLinks } from '../../utils/constants'
import './Footer.css';

function Footer() {
  return (
    <footer className='footer' aria-label="Секция с сылками">
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__content'>
        <p className='footer__link'>&copy; {new Date().getFullYear()}</p>
        <ul className='footer__list'>
          {footerLinks.map((link, index) =>
            <li key={index}>
              <a
                className="footer__link hover"
                href={`${link.link}`}
                target="_blank"
                rel="noreferrer">{link.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  )
}

export default Footer