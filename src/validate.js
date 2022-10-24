export function EnableValidation() {
  const allForms =  Array.from(document.querySelectorAll('.form'));
  allForms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);  
  });
};

export function setEventListeners(formElement) {
  const buttonElement = formElement.querySelector('.button');
  const inputList = Array.from(formElement.querySelectorAll('.form-input'));
  inputList.forEach((inputElement) => {
    const inputElementError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.addEventListener('input', () => {
      isValid(inputElement, inputElementError, buttonElement, formElement)
    }); 
  });
}; 

export const isValid = (inputElement, inputElementError, buttonElement, formElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity("Разрешены только латинские и кириллические буквы, знаки дефиса и пробелы");
  } else {
    inputElement.setCustomValidity("");
  }

  if (checkButtonStatus(formElement) === "false"){
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('button_disabled'); 

  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('button_disabled');
  }

  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElementError, inputElement.validationMessage);
    
  } else {
    hideInputError(inputElement, inputElementError);
  }
};

export const checkButtonStatus = (formElement) => {
  let test = "true";
  const inputList = Array.from(formElement.querySelectorAll('.form-input'));
  for (let i = 0, len = inputList.length; i < len; i++) {
    if (!inputList[i].validity.valid) {
      test = "false";
    }
  }
  return test;
};

export const showInputError = (element, inputElementError, errorMessage) => {
  element.classList.add('edit-form__type-error');
  inputElementError.textContent = errorMessage;
  inputElementError.removeAttribute("hidden");
};

export const hideInputError = (element, inputElementError) => {
  element.classList.remove('edit-form__type-error');
  inputElementError.setAttribute("hidden", "hidden");
  inputElementError.textContent = '';
};
