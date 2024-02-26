import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  useEffect(() => {
    document.title = "Movies - 404";
  }, []);

  return (
    <div>
      <div className="not-found">
        <p className="not-found__title">404</p>
        <p className="not-found__text">Страница не найдена</p>
        <Link className="not-found__button"
          to='/'
        >Назад</Link>
      </div>
    </div>
  )
}

export default NotFound


