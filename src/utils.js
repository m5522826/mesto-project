import {  } from './index.js';

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function closePopup(popupType) {
  popupType.classList.replace('popup_opened', 'popup_closed');
  sleep(500).then(() => {
    popupType.classList.remove('popup_closed'); 
  });
}
    
export function openPopup(popup) {
  popup.classList.add('popup_opened');
}

export function escClose (evt) {
    if (evt.key === 'Escape') {
      closePopup(popupEdit);
      closePopup(popupAdd);
      closePopup(popupAvatar);
      closePopup(popupPhoto);
    }
}
  
document.addEventListener('keydown', escClose);