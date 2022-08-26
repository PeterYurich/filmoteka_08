const refs = {
  openModalBtnTeam: document.querySelector('[data-modal-open-team]'),
  closeModalBtnTeam: document.querySelector('[data-modal-close-team]'),
  modalTeam: document.querySelector('[data-modal-team]'),
};

refs.openModalBtnTeam.addEventListener('click', onOpenModal);
refs.closeModalBtnTeam.addEventListener('click', onCloseModal);
refs.modalTeam.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscClose);

function onOpenModal() {
  window.addEventListener('keydown', onEscClose);
  refs.modalTeam.classList.remove('is-hidden');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscClose);
  refs.modalTeam.classList.add('is-hidden');
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
