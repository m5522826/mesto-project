import '../pages/index.css';

import { initialCards, addButton, editButton, avatarButton, popupEdit, popupAdd, popupAvatar, 
  profileName, profileDescription, avatarFormImg, formElementEdit, userNameInput, userJobInput, formElementAdd, placeInput, urlInput, 
  formElementAvatar, urlAvatar, cardContainer, popupPhoto } from './utils.js';

import { enableValidation } from './validate.js';
import { addCard } from './card.js';
import { closePopup, openPopup } from './modal.js';

const createValidationSetting = {
  popupSelector: '.popup',
  formSelector: '.form',
  inputSelector: '.form-input',
  submitButtonSelector: '.button',
  inactiveButtonClass: 'button_disabled',
  errorClass: 'edit-form__type-error',
};

function editProfile (evt) {
    evt.preventDefault();
    profileName.textContent = userNameInput.value;
    profileDescription.textContent = userJobInput.value;
    formElementEdit.reset();
  }
  
function addNewCard(evt) {
    evt.preventDefault();
    const newCard = addCard(placeInput.value, urlInput.value);
    cardContainer.prepend(newCard);
    formElementAdd.reset();
  }
  
function addNewAvatar (evt) {
  evt.preventDefault();
  avatarFormImg.src = urlAvatar.value;
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

formElementEdit.addEventListener('submit', editProfile);
formElementAdd.addEventListener('submit', addNewCard);
formElementAvatar.addEventListener('submit', addNewAvatar);

closePopup(popupEdit);
closePopup(popupAdd);
closePopup(popupAvatar);
closePopup(popupPhoto);

initialCards.forEach (card => {
  const newCard = addCard(card.name, card.link);
  cardContainer.prepend(newCard);
})
 
enableValidation(createValidationSetting);