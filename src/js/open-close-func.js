import { onOpenModal, onCloseModal } from './open-modal-window';

export function onOpenOnClose(e) {
  const card = document.querySelector('.photo-card__link');
  card.setAttribute('modal-open', null);
  if (e.target.classList.contains('photo-card__link')) {
    return;
  }

  card.addEventListener('click', () => onOpenModal());

  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', () => onCloseModal());
}
