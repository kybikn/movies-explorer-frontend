import React from 'react'
import { useEffect } from "react";

import './Popup.css'
import close from '../../images/close.svg'

const Popup = ({ isOpen, onClose, name, children }) => {

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [isOpen, onClose])

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  }

  return (
    <div
      onClick={handleOverlay}
      className={`popup ${isOpen ? "popup_active" : ""} popup_type_${name}`}>
      <div className="popup__container">
        <button
          className='popup__close hover'
          type='button'
          onClick={onClose}>
          <img
            src={close}
            alt="Логотип">
          </img>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;