const refsTeam = {
  openModalBtnTeam: document.querySelector('.footer-link'),
  closeModalBtnTeam: document.querySelector('[data-modal-close-team]'),
  modalTeam: document.querySelector('[data-modal-team]'),

};
const openModalBtn = document.querySelector('.footer-link');
console.log(openModalBtn);
console.log(refsTeam.closeModalBtnTeam);
refsTeam.openModalBtnTeam.addEventListener('click', onOpenModalTeam);
refsTeam.closeModalBtnTeam.addEventListener('click', onCloseModalTeam);
refsTeam.modalTeam.addEventListener('click', footerModalClickTeam);
window.addEventListener('keydown', onEscCloseTeam);

function onOpenModalTeam() {
  window.addEventListener('keydown', onEscCloseTeam);
  refsTeam.modalTeam.classList.remove('is-hidden');
}

function onCloseModalTeam() {
  window.removeEventListener('keydown', onEscCloseTeam);
  refsTeam.modalTeam.classList.add('is-hidden');
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
// const refs = {
//     openModalBtn: document.querySelector('.footerModalOpen'),
//     // closeModalBtn: document.querySelector('footerModalClose'),
//     modal: document.querySelector('.footerModal'),
//     //main: document.querySelector('main'),
//     body: document.querySelector('body'),
//   };

//   refs.openModalBtn.addEventListener('click', openModal);

//   function openModal(e) {
//     e.preventDefault();
//     toggleModal(e);

//     refs.body.addEventListener('keydown', closeModal);
//     refs.modal.addEventListener('click', closeModal);
//   }

//   function closeModal(e) {
//     if (
//       e.target.className === 'footerModal' ||
//       e.target.className === 'teamList' ||
//       e.key === 'Escape'
//     ) {
//       toggleModal();
//       refs.body.removeEventListener('keydown', closeModal);
//       refs.modal.removeEventListener('click', closeModal);
//     }
//   }
//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     refs.body.classList.toggle('modalFooter-open');
//   }
