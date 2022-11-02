import '../pages/index.css';

import { initialCards, addButton, editButton, avatarButton, popupEdit, popupAdd, popupAvatar, buttonFormElementAvatar, formElementAvatarInputList,
  profileName, profileDescription, avatarFormImg, formElementEdit, userNameInput, userJobInput, formElementAdd, placeInput, urlInput, 
  formElementAvatar, urlAvatar, cardContainer, popups, buttonFormElementEdit, formElementEditInputList, buttonFormElementAdd, formElementAddInputList } from './utils.js';

import { enableValidation, toggleSubmitButton, hideAllInputError } from './validate.js';
import { addCard } from './card.js';
import { openPopup,closePopup } from './modal.js';

const validationSetting = {
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
  closePopup(popupEdit);
}
  
function addNewCard(evt) {
  evt.preventDefault();
  const newCard = addCard(placeInput.value, urlInput.value);
  cardContainer.prepend(newCard);
  formElementAdd.reset();
  closePopup(popupAdd);
}
  
function addNewAvatar (evt) {
  evt.preventDefault();
  avatarFormImg.src = urlAvatar.value;
  formElementAvatar.reset();
  closePopup(popupAvatar);
}

editButton.addEventListener('click', evt => {
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileDescription.textContent;
  openPopup(popupEdit);
  toggleSubmitButton(buttonFormElementEdit, formElementEditInputList, validationSetting.inactiveButtonClass);
  hideAllInputError(validationSetting, formElementEdit);
})
  
addButton.addEventListener('click', evt => {
  openPopup(popupAdd);
  toggleSubmitButton(buttonFormElementAdd, formElementAddInputList, validationSetting.inactiveButtonClass);
  hideAllInputError(validationSetting, formElementAdd);
})
  
avatarButton.addEventListener('click', evt => {
  openPopup(popupAvatar);
  toggleSubmitButton(buttonFormElementAvatar, formElementAvatarInputList, validationSetting.inactiveButtonClass);
  hideAllInputError(validationSetting, formElementAvatar);
})

formElementEdit.addEventListener('submit', editProfile);
formElementAdd.addEventListener('submit', addNewCard);
formElementAvatar.addEventListener('submit', addNewAvatar);

initialCards.forEach (card => {
  const newCard = addCard(card.name, card.link);
  cardContainer.prepend(newCard);
})

popups.forEach((popupInstance) => {
  popupInstance.addEventListener('click', evt => {
    evt.target.classList.contains('popup__close-icon') ? closePopup(popupInstance) : false;
    evt.target.classList.contains('popup_background') ? closePopup(popupInstance) : false;
  });
});

enableValidation(validationSetting);