const closeButton = document.querySelectorAll('.popup__close-icon');
const popupOpened = document.querySelectorAll('.popup');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function closePopup() {
  for (let el of popupOpened) {
    el.classList.replace('popup_opened', 'popup_closed');
    sleep(500).then(() => {
      el.classList.remove('popup_closed'); 
    });
    
    console.log('${el.class.List}');
  }
}

for (let elem of closeButton) {
elem.addEventListener('click', closePopup);
}