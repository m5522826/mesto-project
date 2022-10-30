export function openPopup(popup) {
  popup.classList.add('popup_opened');
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

export function clickClosePopup(popup) {
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup__close-icon') ? closePopup(popup) : false;
  });
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup_background') ? closePopup(popup) : false;
  })
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    };
  });
};
