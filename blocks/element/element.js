//const elementCard = document.querySelectorAll('.element');

//function addElement(nameValue, linkValue) {
    /*const separetedElement = document.createElement('li');
    separetedElement.classList.add('element');

    const elementPhoto = document.createElement('img');
    elementPhoto.classList.add('element__photo');
    elementPhoto.textContent = linkValue; 
    
    const elementTitleBox = document.createElement('div');
    elementTitleBox.classList.add('element__title-box');
    
    const elementTitle = document.createElement('h2');
    elementTitle.classList.add('element__title');
    elementTitle.textContent = nameValue; 

    const likeButtonElement = document.createElement('button');
    likeButtonElement.classList.add('element__like');
    likeButtonElement.textContent = element__like;
    */

    const initialCards = [
        {
          name: 'Архыз',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
        },
        {
          name: 'Челябинская область',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        },
        {
          name: 'Иваново',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        },
        {
          name: 'Камчатка',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
        },
        {
          name: 'Холмогорский район',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
          name: 'Байкал',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        }
        ];
    
    var myElement = document.querySelector('.elements');
      
    function addEl(elementTitle, link){
          myElement.insertAdjacentHTML('afterbegin', `
             <li class="element">
               <button class="element__trash" type="button"></button>
               <button class="element__button-img" type="button"><img class="element__photo" src="${link}" alt="${elementTitle}"></button>
                <div class="element__title-box">
                  <h2 class="element__title">${elementTitle}</h2>
                  <button class="element__like" type="button"></button>
                </div>
              </li>
          `);
        document.querySelector('.element__like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__like_active');       
            });
            
        document.querySelector('.element__button-img').addEventListener('click', function (evt) {
           showPhoto(elementTitle,link)     
            });
          } 
    for (let i = 0; i < initialCards.length; i++) { // выведет 0, затем 1, затем 2
        addEl(initialCards[i].name,initialCards[i].link);
        delEl()
        }


    function delEl(){
        document.querySelector('.element__trash').addEventListener('click', function () {
            document.querySelector('.element__trash').closest('.element').remove();
        }); 
    }

//function addPhotoPopup ()
//
    //}


    //const deleteButton = document.querySelector('.element__trash');

    //deleteButton.addEventListener('click', function () {
    //    const oneElement = deleteButton.closest('.element');
    //    oneElement.remove();
    //}); 

  