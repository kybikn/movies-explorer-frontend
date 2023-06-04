import React from 'react'
import './NavTab.css'
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <div className="navtab__button">
      <Link className="navtab__link"
        to="/"
      >Узнать больше</Link>
    </div>
  );
}


export default NavTab;