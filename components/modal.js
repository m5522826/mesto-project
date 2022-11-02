import { imgPopupPhoto, titlePopupPhoto, popupPhoto  } from './utils.js';

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClose);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
  if (evt.key === 'Escape') {
  const popups = Array.from(this.querySelectorAll('.popup'));
  popups.forEach((popup) => {
// If, определющий открытый попап находится строкой ниже.
// Закрытие popup'а распространяется только на открытый в данный момент popup.
// 2 popup'а одновременно в проекте открыты быть не могут.
    if (popup.classList.contains('popup_opened')) {
      closePopup(popup);
    };
  });
};
}
