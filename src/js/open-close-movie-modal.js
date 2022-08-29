const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

refs.modal.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscClose);

export function showModalMovieWindow() {
  refs.body.classList.add('overflow');
  window.addEventListener('keydown', onEscClose);
  refs.modal.classList.remove('is-hidden');
}

export function hideModalMovieWindow() {
  refs.body.classList.remove('overflow');
  window.removeEventListener('keydown', onEscClose);
  refs.modal.classList.add('is-hidden');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    hideModalMovieWindow();
  }
}

function onEscClose(e) {
  if (e.key === 'Escape') {
    hideModalMovieWindow();
  }
}