const initialCards = [
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

const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__description');
const cardsContainer = document.querySelector('.elements');
const element = document.querySelector('#element').content;
const popupEdit = document.getElementById('popupEdit');
const popupAdd = document.getElementById('popupAdd');
const popupPhoto = document.getElementById('popupPhoto');
const popupAvatar = document.getElementById('popupAvatar');
const buttonAvatar = document.querySelector('.profile__avatar');
const formElementAvatar = document.forms.avatarForm;
const urlAvatar = formElementAvatar.elements.urlAvatar;
const avatarFormImg = document.querySelector('.profile__avatar-img');

const buttonAdd = document.querySelector('.profile__add-button');
const buttonEdit = document.querySelector('.profile__edit-button');
const formElementEdit = document.forms.editForm;
const userNameInput = formElementEdit.elements.nameInput;
const userJobInput = formElementEdit.elements.jobInput;
const formElementAdd = document.forms.addForm;
const placeInput = formElementAdd.elements.placeInput;
const urlInput = formElementAdd.elements.urlInput;
const photoForm = document.querySelector('.photo-form');
const photoFormImg =  photoForm.querySelector('.photo-form__img');
const photoFormTitle = photoForm.querySelector('.photo-form__title');



function newPlace(elementTitle, link){
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

function renderCard(card){
cardsContainer.prepend(card);
}

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

function closePopup(popupType) {
popupType.classList.replace('popup_opened', 'popup_closed');
sleep(500).then(() => {
  popupType.classList.remove('popup_closed'); 
  });
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
} 

function submitHandlerEditForm (evt) {
  evt.preventDefault(); 
  profileName.textContent = userNameInput.value;
  profileWork.textContent = userJobInput.value;
  closePopup(popupEdit);
  formElementEdit.reset();
}

function submitHandlerAddForm (evt) {
  evt.preventDefault(); 
  renderCard(newPlace(placeInput.value,urlInput.value)); 
  closePopup(popupAdd);
  formElementAdd.reset();
}










function submitHandlerAvatarForm (evt) {
  evt.preventDefault(); 
  avatarFormImg.src = urlAvatar.value;
  closePopup(popupAvatar);
  form.reset();
}

function showPhoto(elementTitle, link) {
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
openPopup(popupAdd);
});

buttonEdit.addEventListener('click', function(){
userNameInput.value = profileName.textContent;
userJobInput.value = profileWork.textContent;
openPopup(popupEdit);
});

buttonAvatar.addEventListener('click', function(){
  urlAvatar.value = "";
  openPopup(popupAvatar);
  });

formElementEdit.addEventListener('submit', submitHandlerEditForm);
formElementAdd.addEventListener('submit', submitHandlerAddForm);
formElementAvatar.addEventListener('submit', submitHandlerAvatarForm);


function escClose (evt) {
  if (evt.key === 'Escape') {
    closePopup(popupEdit);
    closePopup(popupAdd);
    closePopup(popupAvatar);
    closePopup(popupPhoto);
  }
}

document.addEventListener('keydown', escClose);



const textInput = document.querySelector('input[type=text]');
const editSubmit = document.querySelector('.edit-form__submit-button');
const addSubmit = document.querySelector('.add-form__submit-button_disabled');


function setEditSubmitButtonState (isFormValid) {
  if (isFormValid) {
    editSubmit.removeAttribute('disabled');
    editSubmit.classList.remove('edit-form__submit-button_disabled'); 
  } else {
    editSubmit.setAttribute('disabled', true);
    editSubmit.classList.add('edit-form__submit-button_disabled'); 
  }
}

formElementEdit.addEventListener('input', function () {
  const isValid = userNameInput.value.length > 1 && userJobInput.value.length > 1;
  setEditSubmitButtonState(isValid);
});

function setAddSubmitButtonState (isFormValid) {
  if (isFormValid) {
    addSubmit.removeAttribute('disabled');
    addSubmit.classList.add('add-form__submit-button'); 
  } else {
    addSubmit.setAttribute('disabled', true);
    addSubmit.classList.remove('add-form__submit-button'); 
  }
}

formElementAdd.addEventListener('input', function () {
  const isValid = placeInput.value.length > 1 && urlInput.value.length > 0;
  setAddSubmitButtonState(isValid);
});
