export function createValidationSetting(popupInstance){
  
  const object = {
    formSelector: popupInstance.querySelector('.form'),
    inputSelector: Array.from(popupInstance.querySelectorAll('.form-input')),
    submitButtonSelector: popupInstance.querySelector('.button'),
    inactiveButtonClass: 'button_disabled',
    errorClass: 'edit-form__type-error',
  };
  return object;
}

export function enableValidation(settings){
  settings.inputSelector.forEach((inputElement) => {
    const inputElementError = settings.formSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.addEventListener('input', () => {
      toggleInputError(inputElement, inputElementError, inputElement.validationMessage, settings.errorClass);
      toggleCustomValidate(inputElement);
      toggleSubmitButton(settings.submitButtonSelector,settings.inputSelector,settings.inactiveButtonClass);
    }); 
  });
}

export function hideValidationErrors(settings){
  settings.inputSelector.forEach((inputElement) => {
    const inputElementError = settings.formSelector.querySelector(`.${inputElement.id}-error`);
      hideInputError(inputElement, inputElementError, settings.errorClass);
  });
}

export function toggleSubmitButton(buttonElement,inputSelector,inactiveButtonClass) {
  if (checkButtonStatus(inputSelector) === "false"){
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass); 

  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

export const checkButtonStatus = (inputSelector) => {
  let test = "true";
  for (let i = 0, len = inputSelector.length; i < len; i++) {
    if (!inputSelector[i].validity.valid) {
      test = "false";
    }
  }
  return test;
};


export const toggleCustomValidate = (inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
}

export const toggleInputError = (inputElement, inputElementError, errorMessage, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElementError, errorMessage, errorClass);
  } else {
    hideInputError(inputElement, inputElementError, errorClass);
  }
};

export const showInputError = (inputElement, inputElementError, errorMessage, errorClass) => {
  inputElement.classList.add(errorClass);
  inputElementError.textContent = errorMessage;
  inputElementError.removeAttribute("hidden");
}

export const hideInputError = (inputElement, inputElementError, errorClass) => {
  inputElement.classList.remove(errorClass);
  inputElementError.setAttribute("hidden", "hidden");
  inputElementError.textContent = '';
}