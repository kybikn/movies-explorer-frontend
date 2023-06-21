import React from 'react'

import './Preloader.css'

const Preloader = ({ onClick }) => {
  // const [isLoading, setLoading] = useState(false);
  return (
    <div className="preloader">
      {/* {isLoading
        ? (<div className="preloader__container">
          <span className="preloader__round"></span>
        </div>)
        : (<button className="preloader__button hover"
          onClick={onClick}
        >Ещё</button>)
      } */}
      <button
        className="preloader__button hover"
        onClick={onClick}
        area-label="Показать ещё фильмы"
      >Ещё</button>
    </div>
  )
};

export default Preloader
