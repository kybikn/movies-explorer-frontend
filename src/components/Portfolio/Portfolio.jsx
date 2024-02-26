import React from 'react'
import { Link } from 'react-router-dom';
import { PORTFOLIO_LINKS } from '../../data/data';

import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__content">
        {PORTFOLIO_LINKS.map((link) =>
          <li key={link.id} className="portfolio__item">
            <Link
              className="portfolio__link hover"
              to={`${link.link}`}
              target="_blank">{link.name}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Portfolio