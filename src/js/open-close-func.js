import { onOpenModal, onCloseModal } from './open-modal-window';
import { loadClickedMovies } from './load-clicked-movie';

const myLibrary = {
  watched: [],
  queue: [],
};

export function onOpenOnClose(e,id) {

  const addToWatched = document.querySelector('.btn-add-to-watched');
  const addToQueue = document.querySelector('.btn-add-to-queue');
  // ADD LOCAL STORAGE AND DEL=======////////
  function onAddToWatched(e) {
    const idMovie = id;
    const positionArray = myLibrary.watched.findIndex(item => item === idMovie);

    if (positionArray >= 0) {
      myLibrary.watched.splice(positionArray, 1);
      addToWatched.classList.remove('btn-remove');
      addToWatched.textContent = 'Add to watched';
    } else {
      myLibrary.watched.push(idMovie);
      addToWatched.classList.add('btn-remove');
      addToWatched.textContent = 'Remove watched';
    }
    localStorage.setItem('watched', JSON.stringify(myLibrary.watched));
    // const xx = localStorage.getItem('watched');
  }
  addToWatched.addEventListener('click', onAddToWatched);

  function onAddToQueue(e) {
    const idMovie = id;
    const positionArray = myLibrary.queue.findIndex(item => item === idMovie);

    if (positionArray >= 0) {
      myLibrary.queue.splice(positionArray, 1);
      addToQueue.classList.remove('btn-remove');
      addToQueue.textContent = 'Add to queue';
    } else {
      myLibrary.queue.push(idMovie);
      addToQueue.classList.add('btn-remove');
      addToQueue.textContent = 'Remove queue';
    }
    localStorage.setItem('queue', JSON.stringify(myLibrary.queue));
  }
  addToQueue.addEventListener('click', onAddToQueue);

  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', () => onCloseModal());
}
