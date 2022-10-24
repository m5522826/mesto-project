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


/// const ///

const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const avatarButton = document.querySelector('.profile__avatar');

const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');
const popupPhoto = document.querySelector('#popupPhoto');
const popupAvatar = document.querySelector('#popupAvatar');

const imgPopupPhoto = popupPhoto.querySelector('.photo-form__img');
const titlePopupPhoto = popupPhoto.querySelector('.photo-form__title');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const avatarFormImg = document.querySelector('.profile__avatar-img');

const formElementEdit = document.forms.editForm;
const userNameInput = formElementEdit.elements.nameInput;
const userJobInput = formElementEdit.elements.jobInput;

const formElementAdd = document.forms.addForm;
const placeInput = formElementAdd.elements.placeInput;
const urlInput = formElementAdd.elements.urlInput;


const formElementAvatar = document.forms.avatarForm;
const urlAvatar = formElementAvatar.elements.urlAvatar;

const cardTemplate = document.querySelector('#element').content;
const cardContainer = document.querySelector('.elements');


/// попапы ///

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

function escClose (evt) {
  if (evt.key === 'Escape') {
    closePopup(popupEdit);
    closePopup(popupAdd);
    closePopup(popupAvatar);
    closePopup(popupPhoto);
  }
}

document.addEventListener('keydown', escClose);


/// работа с карточками ///

function openCardPopup(element) {
  imgPopupPhoto.src = element.src;
  imgPopupPhoto.alt = element.alt;
  titlePopupPhoto.textContent = element.alt;
  openPopup(popupPhoto);
}

function deleteCard(cardElement) {
  cardElement.remove();
}

function addCard(name, link) {
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

initialCards.forEach (card => {
  const newCard = addCard(card.name, card.link);
  cardContainer.prepend(newCard);
})


/// работа с кнопками сабмит ///

function editProfile (evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileDescription.textContent = userJobInput.value;
  closePopup(popupEdit);
}

function addNewCard(evt) {
  evt.preventDefault();
  const newCard = addCard(placeInput.value, urlInput.value);
  cardContainer.prepend(newCard);
  placeInput.value = "";
  urlInput.value = "";
  closePopup(popupAdd);
}

function addNewAvatar (evt) {
  evt.preventDefault();
  avatarFormImg.src = urlAvatar.value;
  closePopup(popupAvatar);
  formElementAvatar.reset();
}

formElementEdit.addEventListener('submit', editProfile);
formElementAdd.addEventListener('submit', addNewCard);
formElementAvatar.addEventListener('submit', addNewAvatar);


/// валидация ///

function EnableValidation() {
  const allForms =  Array.from(document.querySelectorAll('.form'));
  allForms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);  
  });
};

function setEventListeners(formElement) {
  const buttonElement = formElement.querySelector('.button');
  const inputList = Array.from(formElement.querySelectorAll('.form-input'));
  inputList.forEach((inputElement) => {
    const inputElementError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.addEventListener('input', () => {
      isValid(inputElement, inputElementError, buttonElement, formElement)
    }); 
  });
}; 

const isValid = (inputElement, inputElementError, buttonElement, formElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity("Разрешены только латинские и кириллические буквы, знаки дефиса и пробелы");
  } else {
    inputElement.setCustomValidity("");
  }

  if (checkButtonStatus(formElement) === "false"){
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('button_disabled'); 

  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('button_disabled');
  }

  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElementError, inputElement.validationMessage);
    
  } else {
    hideInputError(inputElement, inputElementError);
  }
};

const checkButtonStatus = (formElement) => {
  let test = "true";
  const inputList = Array.from(formElement.querySelectorAll('.form-input'));
  for (let i = 0, len = inputList.length; i < len; i++) {
    if (!inputList[i].validity.valid) {
      test = "false";
    }
  }
  return test;
};

const showInputError = (element, inputElementError, errorMessage) => {
  element.classList.add('edit-form__type-error');
  inputElementError.textContent = errorMessage;
  inputElementError.removeAttribute("hidden");
};

const hideInputError = (element, inputElementError) => {
  element.classList.remove('edit-form__type-error');
  inputElementError.setAttribute("hidden", "hidden");
  inputElementError.textContent = '';
};

EnableValidation();