const addButton = document.querySelector('.profile__add-button');
const popupOpenedAdd = document.querySelector('#popupAdd');

function addPopup() {
  popupOpenedAdd.classList.add('popup_opened');
  console.log('${popupOpenedAdd.class.List}');
}

addButton.addEventListener('click', addPopup);