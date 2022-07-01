const formElement = document.querySelector('.edit-form');
const userNameInput = document.querySelector('#nameInput');
const userJobInput = document.querySelector('#jobInput');

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  const nameInput = userNameInput.value;
  const jobInput = userJobInput.value;
  const profileName = document.querySelector('.profile__name');
  const profileWork = document.querySelector('.profile__description');
  profileName.textContent = userNameInput.value;
  profileWork.textContent = userJobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);