const addFormElement = document.querySelector('.add-form');
const userPlaceInput = document.querySelector('#placeInput');
const userUrlInput = document.querySelector('#urlInput');

function formAddSubmitHandler (evt) {
  evt.preventDefault(); 

  const placeInput = userPlaceInput.value;
  const urlInput = userUrlInput.value;
  addEl(placeInput,urlInput);
  delEl()
}

addFormElement.addEventListener('submit', formAddSubmitHandler);
addFormElement.addEventListener('submit', closePopup);
console.log(formAddSubmitHandler)