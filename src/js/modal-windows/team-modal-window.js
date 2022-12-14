const refsTeam = {
  openModalBtnTeam: document.querySelector('[data-modal-open-team]'),
  closeModalBtnTeam: document.querySelector('[data-modal-close-team]'),
  modalTeam: document.querySelector('[data-modal-team]'),
  body: document.querySelector('body'),
};

refsTeam.openModalBtnTeam.addEventListener('click', onOpenModalTeam);
refsTeam.closeModalBtnTeam.addEventListener('click', onCloseModalTeam);
window.addEventListener('keydown', onEscCloseTeam);

function onOpenModalTeam(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscCloseTeam);
  refsTeam.modalTeam.classList.remove('is-hidden');
  refsTeam.body.classList.add('hidden');
}

function onCloseModalTeam() {
  window.removeEventListener('keydown', onEscCloseTeam);
  refsTeam.modalTeam.classList.add('is-hidden');
  refsTeam.body.classList.remove('hidden');
}

function onEscCloseTeam(e) {
  if (e.key === 'Escape') {
    onCloseModalTeam();
  }
}
