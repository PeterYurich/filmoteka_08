const refs = {
  openModalBtnTeam: document.querySelector('[data-modal-open-team]'),
  closeModalBtnTeam: document.querySelector('[data-modal-close-team]'),
  modalTeam: document.querySelector('[data-modal-team]'),
};

refs.openModalBtnTeam.addEventListener('click', onOpenModalTeam);
refs.closeModalBtnTeam.addEventListener('click', onCloseModalTeam);
refs.modalTeam.addEventListener('click', footerModalClickTeam);
window.addEventListener('keydown', onEscCloseTeam);

function onOpenModalTeam() {
  window.addEventListener('keydown', onEscCloseTeam);
  refs.modalTeam.classList.remove('is-hidden');
}

function onCloseModalTeam() {
  window.removeEventListener('keydown', onEscCloseTeam);
  refs.modalTeam.classList.add('is-hidden');
}

function footerModalClickTeam(e) {
  if (e.currentTarget === e.target) {
    onCloseModalTeam();
  }
}
function onEscCloseTeam(e) {
  if (e.key === 'Escape') {
    onCloseModalTeam();
  }
}
