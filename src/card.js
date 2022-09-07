import { cardsContainer, placeInput, urlInput, popupAdd, formElementAdd } from './index.js';
import { closePopup } from './utils.js';

export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export function newPlace(elementTitle, link){
    const placeElement = element.querySelector('.element').cloneNode(true); 
    const placeElementPhoto = placeElement.querySelector('.element__photo');
    const placeElementLike = placeElement.querySelector('.element__like');
    const placeElementButtonImage = placeElement.querySelector('.element__button-img');
    placeElementPhoto.src = link;
    placeElementPhoto.alt = elementTitle;
    placeElement.querySelector('.element__title').textContent = elementTitle;
    placeElement.querySelector('.element__trash').addEventListener('click', function () {
         placeElement.remove();
    });
    placeElementLike.addEventListener('click', function () {
        placeElementLike.classList.toggle('element__like_active');
    });
    placeElementButtonImage.addEventListener('click', function () {
      showPhoto(elementTitle,link);
     });
    return placeElement;
} 
      
export function renderCard(card){
    cardsContainer.prepend(card);
}

export function submitHandlerAddForm (evt) {
    evt.preventDefault(); 
    renderCard(newPlace(placeInput.value,urlInput.value)); 
    closePopup(popupAdd);
    formElementAdd.reset();
}