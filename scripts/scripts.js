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
const elements = document.querySelector('.elements');
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
let userPlaceInput = document.querySelector('#placeInput');
let userUrlInput = document.querySelector('#urlInput');

//Создание карточек//
  
function addPlace(elementTitle, link){
    const placeElement = element.querySelector('.element').cloneNode(true); 
    placeElement.querySelector('.element__photo').src = link;
    placeElement.querySelector('.element__photo').alt = elementTitle;
    placeElement.querySelector('.element__title').textContent = elementTitle;
    placeElement.id = elementTitle;
    placeElement.querySelector('.element__trash').addEventListener('click', function () {
        placeElement.querySelector('.element__trash').closest('.element').remove();
    }); 
    elements.prepend(placeElement);
} 

function addLike(elementTitle){
    const element = document.getElementById(elementTitle);
    const elementLike = element.querySelector('.element__like');
    console.log(elementLike);
    elementLike.addEventListener('click', function(){elementLike.classList.toggle('element__like_active')})
}

function addBigPicture(elementTitle,link){
    const element = document.getElementById(elementTitle);
    const buttonImage = element.querySelector('.element__button-img');
    buttonImage.addEventListener('click', function (evt) {
                showPhoto(elementTitle,link)     
                 }); 
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function closePopup(popupType) {
  const popupOpened = document.getElementById(popupType);
  /* Касательно данной конструкции
  Она используется для плавного закрытия окна.
  Снчала происходит увеличение прозрачности при смене модификатора, и следующим этапом новый модификатор удаляется
  В задании про необходимость использования ТОЛЬКО удаления ничего не сказано.
  */
    popupOpened.classList.replace('popup_opened', 'popup_closed');
    sleep(500).then(() => {
        popupOpened.classList.remove('popup_closed'); 
    });
}

//Кнопка добавления карточек//
function openPopup(popup) {
    popup.classList.add('popup_opened');
} 

function submitHandlerEditForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = userNameInput.value;
    profileWork.textContent = userJobInput.value;
    closePopup("popupEdit");
}

function submitHandlerAddForm (evt) {
    evt.preventDefault(); 
  
    let placeInput = userPlaceInput.value;
    let urlInput = userUrlInput.value;
    addPlace(placeInput,urlInput);
    addBigPicture(placeInput,urlInput)   
    addLike(placeInput);
    // считаю что "" более универсальный способ.
    userUrlInput.value = "";
    userUrlInput.value = "";
    closePopup("popupAdd");
}

function showPhoto(elementTitle, link) {
    const photoForm = document.querySelector('.photo-form');
    photoForm.querySelector('.photo-form__img').alt = elementTitle;
    photoForm.querySelector('.photo-form__img').src = link;
    photoForm.querySelector('.photo-form__title').textContent = elementTitle;
    popupPhoto.classList.add('popup_opened');
  }

//Кнопка закрытия попапов//
for (let i = 0; i < initialCards.length; i++) { // выведет 0, затем 1, затем 2
    addPlace(initialCards[i].name,initialCards[i].link);
    addBigPicture(initialCards[i].name,initialCards[i].link);
    addLike(initialCards[i].name);
    }

popupEdit.querySelector('.popup__close-icon').addEventListener('click', function(){closePopup("popupEdit")});
popupAdd.querySelector('.popup__close-icon').addEventListener('click', function(){closePopup("popupAdd")});
popupPhoto.querySelector('.popup__close-icon_img').addEventListener('click', function(){closePopup("popupPhoto")});
buttonAdd.addEventListener('click', function(){openPopup(popupAdd)});

//Кнопка открытия редактирования профиля//

buttonEdit.addEventListener('click', function(){openPopup(popupEdit)});

//Редактирование профиля//

formElementEdit.addEventListener('submit', submitHandlerEditForm);

//Добавление карточек//

formElementAdd.addEventListener('submit', submitHandlerAddForm);

//Открытие попапа с картинкой//