import '../pages/index.css';

import { closePopup, openPopup } from './utils.js';
import { EnableValidation, setEventListeners, isValid, checkButtonStatus, showInputError, hideInputError } from './validate.js';
import { initialCards, openCardPopup, deleteCard, addCard } from './card.js';
import { escClose } from './modal.js';

export const addButton = document.querySelector('.profile__add-button');
export const editButton = document.querySelector('.profile__edit-button');
export const avatarButton = document.querySelector('.profile__avatar');

export const popups = document.querySelectorAll('.popup');
export const popupEdit = document.querySelector('#popupEdit');
export const popupAdd = document.querySelector('#popupAdd');
export const popupPhoto = document.querySelector('#popupPhoto');
export const popupAvatar = document.querySelector('#popupAvatar');

export const imgPopupPhoto = popupPhoto.querySelector('.photo-form__img');
export const titlePopupPhoto = popupPhoto.querySelector('.photo-form__title');

export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const profileDescription = profile.querySelector('.profile__description');
export const avatarFormImg = document.querySelector('.profile__avatar-img');

export const formElementEdit = document.forms.editForm;
export const userNameInput = formElementEdit.elements.nameInput;
export const userJobInput = formElementEdit.elements.jobInput;

export const formElementAdd = document.forms.addForm;
export const placeInput = formElementAdd.elements.placeInput;
export const urlInput = formElementAdd.elements.urlInput;


export const formElementAvatar = document.forms.avatarForm;
export const urlAvatar = formElementAvatar.elements.urlAvatar;

export const cardTemplate = document.querySelector('#element').content;
export const cardContainer = document.querySelector('.elements');

export function editProfile (evt) {
    evt.preventDefault();
    profileName.textContent = userNameInput.value;
    profileDescription.textContent = userJobInput.value;
    closePopup(popupEdit);
  }
  
export function addNewCard(evt) {
    evt.preventDefault();
    const newCard = addCard(placeInput.value, urlInput.value);
    cardContainer.prepend(newCard);
    placeInput.value = "";
    urlInput.value = "";
    closePopup(popupAdd);
  }
  
export function addNewAvatar (evt) {
  evt.preventDefault();
  avatarFormImg.src = urlAvatar.value;
  closePopup(popupAvatar);
  formElementAvatar.reset();
}

editButton.addEventListener('click', evt => {
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileDescription.textContent;
  openPopup(popupEdit);
})
  
addButton.addEventListener('click', evt => {
  openPopup(popupAdd);
})
  
avatarButton.addEventListener('click', evt => {
  openPopup(popupAvatar);
})
  
popups.forEach (popup => {
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup__close-icon') ? closePopup(popup) : false;
  })
})  

popups.forEach (popup => {
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup_background') ? closePopup(popup) : false;
  })
}) 

document.addEventListener('keydown', escClose);

formElementEdit.addEventListener('submit', editProfile);
formElementAdd.addEventListener('submit', addNewCard);
formElementAvatar.addEventListener('submit', addNewAvatar);

initialCards.forEach (card => {
  const newCard = addCard(card.name, card.link);
  cardContainer.prepend(newCard);
})
 
EnableValidation();