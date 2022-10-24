import { imgPopupPhoto, titlePopupPhoto, popupPhoto, cardTemplate, cardContainer  } from './index.js';
import { openPopup } from './utils.js';

const Arhiz = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
const Chelyab = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
const Ivanovo = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
const Kamchatka = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
const Holmogorsk = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
const Baikal = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

export const initialCards = [
    {
      name: 'Архыз',
      link: Arhiz
    },
    {
      name: 'Челябинская область',
      link: Chelyab
    },
    {
      name: 'Иваново',
      link: Ivanovo
    },
    {
      name: 'Камчатка',
      link: Kamchatka
    },
    {
      name: 'Холмогорский район',
      link: Holmogorsk
    },
    {
      name: 'Байкал',
      link: Baikal
    }
];

export function openCardPopup(element) {
  imgPopupPhoto.src = element.src;
  imgPopupPhoto.alt = element.alt;
  titlePopupPhoto.textContent = element.alt;
  openPopup(popupPhoto);
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
