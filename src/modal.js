import { placeInput, urlInput, popupAdd, formElementAdd, profileName, userNameInput, profileWork, userJobInput, popupEdit, formElementEdit, avatarFormImg, 
    formElementAvatar, urlAvatar, popupAvatar, photoFormImg, photoForm, photoFormTitle, popupPhoto, buttonAdd, buttonAddCreate, buttonEdit, buttonAvatar, 
    buttonAvatarCreate, } from './index.js';
import { closePopup, openPopup } from './utils.js';
import { renderCard, newPlace, initialCards, submitHandlerAddForm } from 'card.js';

export function submitHandlerEditForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = userNameInput.value;
    profileWork.textContent = userJobInput.value;
    closePopup(popupEdit);
    formElementEdit.reset();
}

export function submitHandlerAvatarForm (evt) {
    evt.preventDefault(); 
    avatarFormImg.src = urlAvatar.value;
    closePopup(popupAvatar);
    form.reset();
}
  
export function showPhoto(elementTitle, link) {
  photoFormImg.alt = elementTitle;
  photoFormImg.src = link;
  photoFormTitle.textContent = elementTitle;
  openPopup(popupPhoto);
}
  
for (let i = 0; i < initialCards.length; i++) { 
    renderCard(newPlace(initialCards[i].name,initialCards[i].link));
}
  
popupEdit.querySelector('.popup__close-icon').addEventListener('click', function(){closePopup(popupEdit)});
popupAdd.querySelector('.popup__close-icon').addEventListener('click', function(){closePopup(popupAdd)});
popupPhoto.querySelector('.popup__close-icon_img').addEventListener('click', function(){closePopup(popupPhoto)});
popupAvatar.querySelector('.popup__close-icon').addEventListener('click', function(){closePopup(popupAvatar)});
  
document.querySelector('.popup_dark-background').addEventListener('click', function(){closePopup(popupPhoto)});
  
buttonAdd.addEventListener('click', function(){
  urlInput.value = "";
  placeInput.value = "";
  buttonAddCreate.classList.add('button_disabled');
  buttonAddCreate.setAttribute('disabled', true);
  openPopup(popupAdd);
});
  
buttonEdit.addEventListener('click', function(){
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileWork.textContent;
  openPopup(popupEdit);
});
  
buttonAvatar.addEventListener('click', function(){
    urlAvatar.value = "";
    buttonAvatarCreate.classList.add('button_disabled');
    buttonAvatarCreate.setAttribute('disabled', true);
    openPopup(popupAvatar);
});
  
formElementEdit.addEventListener('submit', submitHandlerEditForm);
formElementAdd.addEventListener('submit', submitHandlerAddForm);
formElementAvatar.addEventListener('submit', submitHandlerAvatarForm);
  