const Arhiz = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
const Chelyab = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
const Ivanovo = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
const Kamchatka = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
const Holmogorsk = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
const Baikal = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

export const initialCards = [
    {
      name: 'Архыз',
      link: Arhiz
    },
    {
      name: 'Челябинская область',
      link: Chelyab
    },
    {
      name: 'Иваново',
      link: Ivanovo
    },
    {
      name: 'Камчатка',
      link: Kamchatka
    },
    {
      name: 'Холмогорский район',
      link: Holmogorsk
    },
    {
      name: 'Байкал',
      link: Baikal
    }
];

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
