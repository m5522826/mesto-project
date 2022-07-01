const editButton = document.querySelector('.profile__edit-button');
const popupOpenedEdit = document.querySelector('#popupEdit');


function editPopup() {
  popupOpenedEdit.classList.add('popup_opened');
  console.log('${popupOpenedEdit.class.List}');
}

editButton.addEventListener('click', editPopup);