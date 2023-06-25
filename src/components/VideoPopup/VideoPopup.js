import React, { useEffect } from 'react';

import './VideoPopup.css';
import '../Popup/Popup.css';
import close from '../../images/close.svg';

function extractVideoID(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[7].length === 11) {
    return match[7];
  } else {
    alert('Could not extract video ID.');
  }
}

function VideoPopup({ url, name, onClose }) {
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="popup popup_active" onClick={handleOverlay}>
      <div className="popup__container">
        <button className="popup__close hover" type="button" onClick={onClose}>
          <img src={close} alt="Логотип"></img>
        </button>
        <iframe
          className="video-popup"
          src={`https://www.youtube.com/embed/${extractVideoID(url)}`}
          title={name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPopup;
