import { imgPopupPhoto, titlePopupPhoto, popupPhoto  } from './utils.js';

export function openPopup(popup) {
  popup.classList.add('popup_opened');
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

export function clickClosePopup(popup) {
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup__close-icon') ? closePopup(popup) : false;
  });
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup_background') ? closePopup(popup) : false;
  })
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    };
  });
};

export function openCardPopup(element) {
  imgPopupPhoto.src = element.src;
  imgPopupPhoto.alt = element.alt;
  titlePopupPhoto.textContent = element.alt;
  openPopup(popupPhoto);
}

export function deleteCard(cardElement) {
  cardElement.remove();
}