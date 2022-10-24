import { popups, popupAdd, addButton, editButton, profileName, userNameInput, profileDescription, userJobInput, popupEdit, avatarButton, 
  popupAvatar, popupPhoto } from './index.js';

import { openPopup, closePopup } from './utils.js';

export function escClose (evt) {
if (evt.key === 'Escape') {
  closePopup(popupEdit);
  closePopup(popupAdd);
  closePopup(popupAvatar);
  closePopup(popupPhoto);
}
}
