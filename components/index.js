import '../pages/index.css';

import { initialCards, addButton, editButton, avatarButton, popupEdit, popupAdd, popupAvatar, 
  profileName, profileDescription, avatarFormImg, formElementEdit, userNameInput, userJobInput, formElementAdd, placeInput, urlInput, 
  formElementAvatar, urlAvatar, cardContainer } from './utils.js';

import { enableValidation, toggleSubmitButton, createValidationSetting, hideValidation } from './validate.js';
import { addCard } from './card.js';
import { closePopup, openPopup, clickClosePopup } from './modal.js';

function editProfile (evt) {
    evt.preventDefault();
    profileName.textContent = userNameInput.value;
    profileDescription.textContent = userJobInput.value;
    closePopup(popupEdit);
    formElementEdit.reset();
  }
  
function addNewCard(evt) {
    evt.preventDefault();
    const newCard = addCard(placeInput.value, urlInput.value);
    cardContainer.prepend(newCard);
    placeInput.value = "";
    urlInput.value = "";
    closePopup(popupAdd);
    formElementAdd.reset();
  }
  
function addNewAvatar (evt) {
  evt.preventDefault();
  avatarFormImg.src = urlAvatar.value;
  closePopup(popupAvatar);
  formElementAvatar.reset();
}

editButton.addEventListener('click', evt => {
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileDescription.textContent;
  openPopup(popupEdit);
  const validationSettings = createValidationSetting(popupEdit);
  hideValidation(validationSettings);
  enableValidation(validationSettings);
  toggleSubmitButton(validationSettings.submitButtonSelector,validationSettings.inputSelector,validationSettings.inactiveButtonClass);
  clickClosePopup(popupEdit);
})
  
addButton.addEventListener('click', evt => {
  openPopup(popupAdd);
  const validationSettings = createValidationSetting(popupAdd);
  hideValidation(validationSettings);
  enableValidation(validationSettings);
  toggleSubmitButton(validationSettings.submitButtonSelector,validationSettings.inputSelector,validationSettings.inactiveButtonClass);
  clickClosePopup(popupAdd);
})
  
avatarButton.addEventListener('click', evt => {
  openPopup(popupAvatar);
  const validationSettings = createValidationSetting(popupAvatar);
  hideValidation(validationSettings);
  enableValidation(validationSettings);
  toggleSubmitButton(validationSettings.submitButtonSelector,validationSettings.inputSelector,validationSettings.inactiveButtonClass);
  clickClosePopup(popupAvatar);
})

formElementEdit.addEventListener('submit', editProfile);
formElementAdd.addEventListener('submit', addNewCard);
formElementAvatar.addEventListener('submit', addNewAvatar);

initialCards.forEach (card => {
  const newCard = addCard(card.name, card.link);
  cardContainer.prepend(newCard);
})
 