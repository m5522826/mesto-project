const addPhotoForm = document.querySelector('.photo-form');
let popupOpenedPhoto = document.querySelector('#popupPhoto');

function showPhoto(elementTitle, link) {
  addPhotoForm.innerHTML = '<img class="photo-form__img" alt="Картинка" src="'+link+'"><figurecapture class="photo-form__title">'+elementTitle+'</figurecapture>';  
  popupOpenedPhoto.classList.add('popup_opened');
  console.log('${popupOpenedPhoto.class.List}');
}