import { onOpenModal, onCloseModal } from './open-modal-window';
import { loadClickedMovies } from './load-clicked-movie';
import { onAddToWatched } from './watched-local';

const myLibrary = {
  watched: [],
  queue: [],
};

export function onOpenOnClose(e, temp) {
  const grid = document.querySelector('.film-grid');

  grid.addEventListener('click', () => onOpenModal(e));

  const addToWatched = document.querySelector('.btn-add-to-watched');
  const addToQueue = document.querySelector('.btn-add-to-queue');

  function onAddToWatched(e) {
    const idMovie = temp;
    myLibrary.watched.push(idMovie);

    localStorage.setItem('watched', JSON.stringify(myLibrary.watched));
    addToWatched.textContent = 'Remove watched';
    const xx = localStorage.getItem('watched');
    console.log(xx);
    if (xx.includes(idMovie)) {
      const h = myLibrary.watched.indexOf(idMovie);
      console.log(h);
      console.log('da');
      const tt = JSON.parse(localStorage.getItem('watched'));
      tt.splice(h, 1);
      localStorage.setItem('watched', JSON.stringify(tt));
      console.log(tt);
    }
    // for (let i = 0; i < myLibrary.watched.length; i += 1) {
    //   // const ad = localStorage.getItem('i');
    //   if (ad === localStorage.getItem('i')) {
    //     localStorage.removeItem('i');
    //     addToWatched.textContent = 'Add to watched';
    //   }
    // }

    // localStorage.removeItem('watched');
    // addToWatched.textContent = 'Add to watched';
  }
  addToWatched.addEventListener('click', onAddToWatched);

  function onAddToQueue(e) {
    const idMovieQueue = temp;
    myLibrary.queue.push(idMovieQueue);
    localStorage.setItem('queue', JSON.stringify(myLibrary.queue));
    addToQueue.textContent = 'Remove queue';
    console.log(localStorage.getItem('queue'));
  }
  addToQueue.addEventListener('click', onAddToQueue);

  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', () => onCloseModal());
}

// function onAddToWatched(e) {

//   const idMovie = temp;
//   myLibrary.watched.push(idMovie);

//   for (let i = 0; i < myLibrary.watched.length; i += 1) {
//     const ad = localStorage.getItem('i')
//     if (ad !== idMovie) {
//           localStorage.setItem('watched', JSON.stringify(myLibrary.watched));
//   addToWatched.textContent = 'Remove watched';
//   console.log(localStorage.getItem('watched'));
//     }
//    else {
//       localStorage.removeItem('i');
//       addToWatched.textContent = 'Add to watched';
//   }

// const idMovie = temp;
// myLibrary.watched.push(idMovie);
// localStorage.setItem('watched', JSON.stringify(myLibrary.watched));
// addToWatched.textContent = 'Remove watched';
// console.log(localStorage.getItem('watched'));
