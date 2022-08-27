import { modalMovieMarkup } from './markup-modal-window';

// const card = document.querySelector('.photo-card');
// console.log(card);
// let open = document.createElement('div');
// const filmgrid = document.querySelector('.film-grid');
// filmgrid.prepend(open);
// open.setAttribute('data-modal-open', '');

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};
console.log(refs);
refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscClose);

function onOpenModal() {
  window.addEventListener('keydown', onEscClose);
  refs.modal.classList.remove('is-hidden');
  refs.modal.insertAdjacentHTML('beforeend', modalMovieMarkup);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscClose);
  refs.modal.classList.add('is-hidden');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
function onEscClose(e) {
  if (e.key === 'Escape') {
    onCloseModal();
  }
}
