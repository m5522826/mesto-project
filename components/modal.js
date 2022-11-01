import { imgPopupPhoto, titlePopupPhoto, popupPhoto  } from './utils.js';

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClose);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup__close-icon') ? popup.classList.remove('popup_opened') : false;
  });
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup_background') ? popup.classList.remove('popup_opened') : false;
  });
  document.removeEventListener('keydown', escClose);
}

export function openCardPopup(element) {
  imgPopupPhoto.src = element.src;
  imgPopupPhoto.alt = element.alt;
  titlePopupPhoto.textContent = element.alt;
  openPopup(popupPhoto);
}

export function deleteCard(cardElement) {
  cardElement.remove();
}

function escClose(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
  const popups = Array.from(this.querySelectorAll('.popup'));
  popups.forEach((popup) => {
    if (popup.classList.contains('popup_opened')) {
      closePopup(popup);
    };
  });
};
}