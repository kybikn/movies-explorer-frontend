import React from 'react'

import './Preloader.css'

const Preloader = ({ onClick }) => {
  return (
    <div className="preloader">
      <button
        className="preloader__button hover"
        onClick={onClick}
        area-label="Показать ещё фильмы"
      >
        {/* Ещё */}
      </button>
    </div>
  )
};

export default Preloader
