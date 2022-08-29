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
  let url = window.location.href;
  if (
    url.indexOf('https://peteryurich.github.io/filmoteka_08/my_library.html') !=
    -1
  ) {
    window.location.reload(true);
  }
  // if (url.indexOf('http://localhost:1234/my_library.html') != -1) {
  //   window.location.reload(true);
  // }
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
