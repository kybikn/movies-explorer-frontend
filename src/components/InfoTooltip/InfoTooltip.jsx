import React from 'react'

import Popup from '../Popup/Popup';
import './InfoTooltip.css';
import successImg from '../../images/success.svg';

function InfoTooltip({ isOpen, onClose, success, message }) {
  return (
    <Popup
      name="tooltip"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="popup__content">
        {success
          ? < img
            className="popup__img-tooltip"
            src={successImg}
            alt="success"
          />
          :
          <svg
            className="popup__img-tooltip"
            alt="fault"
            xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="none">
            <path fill="#FD0707" fillRule="evenodd" d="M60 117c31.48 0 57-25.52 57-57S91.48 3 60 3 3 28.52 3 60s25.52 57 57 57Zm0 3c33.137 0 60-26.863 60-60S93.137 0 60 0 0 26.863 0 60s26.863 60 60 60Zm-4.95-59.293L36.666 42.322l5.656-5.657L60.707 55.05l17.678-17.677 5.657 5.656-17.678 17.678 16.97 16.97-5.656 5.657-16.97-16.97-17.679 17.678-5.656-5.657L55.05 60.707Z" clipRule="evenodd" />
          </svg>
        }
        <p className="popup__title">{message}</p>
      </div>
    </Popup >
  )
}

export default InfoTooltip