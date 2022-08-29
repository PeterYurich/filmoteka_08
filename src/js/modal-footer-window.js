const refsTeam = {
  openModalBtnTeam: document.querySelector('[data-modal-open-team]'),
  closeModalBtnTeam: document.querySelector('[data-modal-close-team]'),
  modalTeam: document.querySelector('[data-modal-team]'),
  body: document.querySelector('body'),
};

console.log(refsTeam.openModalBtnTeam);
refsTeam.openModalBtnTeam.addEventListener('click', onOpenModalTeam);
refsTeam.closeModalBtnTeam.addEventListener('click', onCloseModalTeam);
refsTeam.modalTeam.addEventListener('click', footerModalClickTeam);
window.addEventListener('keydown', onEscCloseTeam);

function onOpenModalTeam(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscCloseTeam);
  refsTeam.modalTeam.classList.remove('is-hidden');
  refsTeam.body.classList.add('body-hiden');
}

function onCloseModalTeam() {
  window.removeEventListener('keydown', onEscCloseTeam);
  refsTeam.modalTeam.classList.add('is-hidden');
  refsTeam.body.classList.remove('body-hiden');
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
// const refsTeam = {
//     openModalBtnTeam: document.querySelector('[data-modal-open-team]'),
//     closeModalBtnTeam: document.querySelector('[data-modal-close-team]'),
//     modalTeam: document.querySelector('[data-modal-team]'),
// };
// console.log(refsTeam.openModalBtnTeam);
// refsTeam.openModalBtnTeam.addEventListener('click', onOpenModalTeam);
// refsTeam.closeModalBtnTeam.addEventListener('click', onCloseModalTeam);
// refsTeam.modalTeam.addEventListener('click', footerModalClickTeam);
// window.addEventListener('keydown', onEscCloseTeam);

// function onOpenModalTeam(e) {
//     e.preventDefault();
//     window.addEventListener('keydown', onEscCloseTeam);
//     refsTeam.modalTeam.classList.remove('is-hidden');
// }

// function onCloseModalTeam() {
//     window.removeEventListener('keydown', onEscCloseTeam);
//     refsTeam.modalTeam.classList.add('is-hidden');
// }

// function footerModalClickTeam(e) {
//     if (e.currentTarget === e.target) {
//         onCloseModalTeam();
//     }
// }
// function onEscCloseTeam(e) {
//     if (e.key === 'Escape') {
//         onCloseModalTeam();
//     }
// }