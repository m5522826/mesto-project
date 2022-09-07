export const profileName = document.querySelector('.profile__name');
export const profileWork = document.querySelector('.profile__description');
export const cardsContainer = document.querySelector('.elements');
export const element = document.querySelector('#element').content;
export const popupEdit = document.getElementById('popupEdit');
export const popupAdd = document.getElementById('popupAdd');
// add form input select
export const formEdit =  document.querySelector('.edit-form');
//const formPlaceEdit =  popupEdit.querySelector('edit-form-place');

export const popupPhoto = document.getElementById('popupPhoto');
export const popupAvatar = document.getElementById('popupAvatar');
export const buttonAvatar = document.querySelector('.profile__avatar');
export const formElementAvatar = document.forms.avatarForm;
export const urlAvatar = formElementAvatar.elements.urlAvatar;
export const avatarFormImg = document.querySelector('.profile__avatar-img');

export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const formElementEdit = document.forms.editForm;
export const userNameInput = formElementEdit.elements.nameInput;
export const userJobInput = formElementEdit.elements.jobInput;
export const formElementAdd = document.forms.addForm;
// add input constants
export const formElementEditInputName = formElementEdit.querySelector('#edit-form-name');
export const formElementEditInputJob = formElementEdit.querySelector('#edit-form-job');
export const formElementAddInputName = formElementAdd.querySelector('#add-form-name');
export const formElementAddInputUrl = formElementAdd.querySelector('#add-form-url');
export const formElementEditInputNameError = formElementEdit.querySelector(`.${formElementEditInputName.id}-error`);
export const formElementEditInputJobError = formElementEdit.querySelector(`.${formElementEditInputJob.id}-error`);

export const placeInput = formElementAdd.elements.placeInput;
export const urlInput = formElementAdd.elements.urlInput;
export const photoForm = document.querySelector('.photo-form');
export const photoFormImg =  photoForm.querySelector('.photo-form__img');
export const photoFormTitle = photoForm.querySelector('.photo-form__title');
export const buttonAvatarCreate = document.querySelector('.avatar-form__submit-button');
export const buttonAddCreate = document.querySelector('.add-form__submit-button');

