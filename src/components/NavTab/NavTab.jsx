import React from 'react'

import './NavTab.css'

function NavTab() {
  return (
    <div className="navtab">
      <div className="navtab__button">
        <a
          className="navtab__link hover"
          href="#about-project">Узнать больше
        </a>
      </div>
    </div>
  );
}


export default NavTab;