import React from 'react'
// import { Link } from 'react-router-dom';

import './NavTab.css'

function NavTab() {
  return (
    <div className="navtab__button">
      {/* <Link className="navtab__link hover"
        to="/">Узнать больше
      </Link> */}
      <a className="navtab__link hover" href="#about-project">Узнать больше</a>
    </div>
  );
}


export default NavTab;