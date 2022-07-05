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



//Создание карточек//

var Place = document.querySelector('.elements');
  
function addPlace(elementTitle, link){
      Place.insertAdjacentHTML('afterbegin', `
         <li class="element">
           <button class="element__trash" type="button"></button>
           <button class="element__button-img" type="button"><img class="element__photo" src="${link}" alt="${elementTitle}"></button>
            <div class="element__title-box">
              <h2 class="element__title">${elementTitle}</h2>
              <button class="element__like" type="button"></button>
            </div>
          </li>
      `);
    document.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');       
        });
        
    document.querySelector('.element__button-img').addEventListener('click', function (evt) {
       showPhoto(elementTitle,link)     
        });
      } 
for (let i = 0; i < initialCards.length; i++) { // выведет 0, затем 1, затем 2
    addPlace(initialCards[i].name,initialCards[i].link);
    delPlace()
    }


function delPlace(){
    document.querySelector('.element__trash').addEventListener('click', function () {
        document.querySelector('.element__trash').closest('.element').remove();
    }); 
}


//Кнопка закрытия попапов//

const closeButton = document.querySelectorAll('.popup__close-icon');
const popupOpened = document.querySelectorAll('.popup');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function closePopup() {
  for (let el of popupOpened) {
    el.classList.replace('popup_opened', 'popup_closed');
    sleep(500).then(() => {
      el.classList.remove('popup_closed'); 
    });
    
    console.log('${el.class.List}');
  }
}

for (let elem of closeButton) {
elem.addEventListener('click', closePopup);
}


//Кнопка добавления карточек//

const addButton = document.querySelector('.profile__add-button');
const popupOpenedAdd = document.querySelector('#popupAdd');

function addPopup() {
  popupOpenedAdd.classList.add('popup_opened');
  console.log('${popupOpenedAdd.class.List}');
}

addButton.addEventListener('click', addPopup);


//Кнопка открытия редактирования профиля//

const editButton = document.querySelector('.profile__edit-button');
const popupOpenedEdit = document.querySelector('#popupEdit');


function editPopup() {
  popupOpenedEdit.classList.add('popup_opened');
  console.log('${popupOpenedEdit.class.List}');
}

editButton.addEventListener('click', editPopup);


//Редактирование профиля//

const formElement = document.querySelector('.edit-form');
const userNameInput = document.querySelector('#nameInput');
const userJobInput = document.querySelector('#jobInput');

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  const profileName = document.querySelector('.profile__name');
  const profileWork = document.querySelector('.profile__description');
  profileName.textContent = userNameInput.value;
  profileWork.textContent = userJobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);


//Добавление карточек//

const addFormElement = document.querySelector('.add-form');
var userPlaceInput = document.querySelector('#placeInput');
var userUrlInput = document.querySelector('#urlInput');

function formAddSubmitHandler (evt) {
  evt.preventDefault(); 

  var placeInput = userPlaceInput.value;
  var urlInput = userUrlInput.value;
  addPlace(placeInput,urlInput);
  delPlace()
  document.querySelector('#urlInput').value = "";
  document.querySelector('#placeInput').value = "";

}

addFormElement.addEventListener('submit', formAddSubmitHandler);
addFormElement.addEventListener('submit', closePopup);
console.log(formAddSubmitHandler)


//Открытие попапа с картинкой//

const addPhotoForm = document.querySelector('.photo-form');
let popupOpenedPhoto = document.querySelector('#popupPhoto');

function showPhoto(elementTitle, link) {
  addPhotoForm.innerHTML = '<img class="photo-form__img" alt="Картинка" src="'+link+'"><figurecapture class="photo-form__title">'+elementTitle+'</figurecapture>';  
  popupOpenedPhoto.classList.add('popup_opened');
  console.log('${popupOpenedPhoto.class.List}');
}