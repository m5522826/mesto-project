import { cardTemplate } from './utils.js';
import { openCardPopup } from './modal.js';

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
