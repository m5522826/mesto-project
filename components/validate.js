export function enableValidation(settings){
  const allFormSelector = Array.from(document.querySelectorAll(settings.formSelector));
  allFormSelector.forEach((formElement) => {
    const buttonSelector = formElement.querySelector(settings.submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    inputList.forEach((inputElement) => {
      const inputElementError = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.addEventListener('input', () => {
        toggleInputError(inputElement, inputElementError, inputElement.validationMessage, settings.errorClass);
        toggleCustomValidate(inputElement);
        toggleSubmitButton(buttonSelector,inputList,settings.inactiveButtonClass);
      });
    });
    toggleSubmitButton(buttonSelector,inputList,settings.inactiveButtonClass);
  });
}

export function hideAllInputError(settings, formIntance){
  const inputList = Array.from(formIntance.querySelectorAll(settings.inputSelector));
  inputList.forEach((inputElement) => {
    const inputElementError = formIntance.querySelector(`.${inputElement.id}-error`);
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