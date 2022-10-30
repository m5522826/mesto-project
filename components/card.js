import { imgPopupPhoto, titlePopupPhoto, popupPhoto, cardTemplate  } from './utils.js';
import { openPopup, clickClosePopup } from './modal.js';

export function openCardPopup(element) {
  imgPopupPhoto.src = element.src;
  imgPopupPhoto.alt = element.alt;
  titlePopupPhoto.textContent = element.alt;
  openPopup(popupPhoto);
  clickClosePopup(popupPhoto);
}

export function deleteCard(cardElement) {
  cardElement.remove();
}

export function addCard(name, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__photo');
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener('click', evt => {
    openCardPopup(cardImage);
  });
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__like').addEventListener('click', evt => {
    evt.target.classList.toggle('element__like_active');
  });
  cardElement.querySelector('.element__trash').addEventListener('click', evt => {
    deleteCard(cardElement);
  });
  return cardElement;
}
