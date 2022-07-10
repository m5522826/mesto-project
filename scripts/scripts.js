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
const buttonAdd = document.querySelector('.profile__add-button');
const buttonEdit = document.querySelector('.profile__edit-button');
const formElementEdit = document.querySelector('.edit-form');
const userNameInput = document.querySelector('#nameInput');
const userJobInput = document.querySelector('#jobInput');
const formElementAdd = document.querySelector('.add-form');
const placeInput = document.querySelector('#placeInput');
const urlInput = document.querySelector('#urlInput');
const photoForm = document.querySelector('.photo-form');
const photoFormImg =  photoForm.querySelector('.photo-form__img');
const photoFormTitle = photoForm.querySelector('.photo-form__title');

function newPlace(elementTitle, link){
  const placeElement = element.querySelector('.element').cloneNode(true); 
  const placeElementPhoto = placeElement.querySelector('.element__photo');
  const placeElementLike = placeElement.querySelector('.element__like');
  const PlaceElementButtonImage = placeElement.querySelector('.element__button-img');
  placeElementPhoto.src = link;
  placeElementPhoto.alt = elementTitle;
  placeElement.querySelector('.element__title').textContent = elementTitle;
  placeElement.querySelector('.element__trash').addEventListener('click', function () {
      placeElement.remove();
  });
  placeElementLike.addEventListener('click', function () {
    placeElementLike.classList.toggle('element__like_active');
  });
  PlaceElementButtonImage.addEventListener('click', function () {
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
/* Касательно данной конструкции
Она используется для плавного закрытия окна.
Снчала происходит увеличение прозрачности при смене модификатора, и следующим этапом новый модификатор удаляется.
В задании про необходимость использования ТОЛЬКО удаления ничего не сказано.
*/
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
}

function submitHandlerAddForm (evt) {
  evt.preventDefault(); 
  renderCard(newPlace(placeInput.value,urlInput.value)); 
  closePopup(popupAdd);
  urlInput.value = "";
  placeInput.value = "";
}

function showPhoto(elementTitle, link) {
photoFormImg.alt = elementTitle;
photoFormImg.src = link;
photoFormTitle.textContent = elementTitle;
openPopup(popupPhoto);
}

userNameInput.value = profileName.textContent;
userJobInput.value = profileWork.textContent;

for (let i = 0; i < initialCards.length; i++) { 
  renderCard(newPlace(initialCards[i].name,initialCards[i].link));
  }

popupEdit.querySelector('.popup__close-icon').addEventListener('click', function(){closePopup(popupEdit)});
popupAdd.querySelector('.popup__close-icon').addEventListener('click', function(){
closePopup(popupAdd);
urlInput.value = "";
placeInput.value = "";
});
popupPhoto.querySelector('.popup__close-icon_img').addEventListener('click', function(){closePopup(popupPhoto)});
buttonAdd.addEventListener('click', function(){openPopup(popupAdd)});

buttonEdit.addEventListener('click', function(){openPopup(popupEdit)});

formElementEdit.addEventListener('submit', submitHandlerEditForm);

formElementAdd.addEventListener('submit', submitHandlerAddForm);