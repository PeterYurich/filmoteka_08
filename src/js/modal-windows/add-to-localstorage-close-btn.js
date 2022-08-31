import { hideModalMovieWindow } from './open-close-movie-modal';

const myLibrary = {
  watched: [],
  queue: [],
};

const localStorageWatched = JSON.parse(localStorage.getItem('watched'));
if (localStorageWatched !== null) {
  myLibrary.watched.push(...localStorageWatched);
}

const localStorageQueue = JSON.parse(localStorage.getItem('queue'));
if (localStorageQueue !== null) {
  myLibrary.queue.push(...localStorageQueue);
}

export function addToWatchedAddToQueueCloseModal(id) {
  const addToWatched = document.querySelector('.btn-add-to-watched');
  const addToQueue = document.querySelector('.btn-add-to-queue');

  function onAddToWatched() {
    const idMovie = id;

    const positionArray = myLibrary.watched.findIndex(item => item === idMovie);
    const positionArrayQueue = myLibrary.queue.findIndex(
      item => item === idMovie
    );
    if (positionArray >= 0) {
      myLibrary.watched.splice(positionArray, 1);
      addToWatched.classList.remove('btn-remove');
      addToWatched.textContent = 'Add to watched';
    } else {
      if (positionArrayQueue >= 0) {
        myLibrary.queue.splice(positionArrayQueue, 1);
        addToQueue.classList.remove('btn-remove');
        addToQueue.textContent = 'Add to queue';
        localStorage.setItem('queue', JSON.stringify(myLibrary.queue));
      }
      myLibrary.watched.push(idMovie);

      addToWatched.classList.add('btn-remove');
      addToWatched.textContent = 'Remove watched';
    }

    localStorage.setItem('watched', JSON.stringify(myLibrary.watched));
  }
  addToWatched.addEventListener('click', onAddToWatched);

  function onAddToQueue() {
    const idMovie = id;
    const positionArray = myLibrary.queue.findIndex(item => item === idMovie);
    const positionArrayWatched = myLibrary.watched.findIndex(
      item => item === idMovie
    );
    if (positionArray >= 0) {
      myLibrary.queue.splice(positionArray, 1);
      addToQueue.classList.remove('btn-remove');
      addToQueue.textContent = 'Add to queue';
    } else {
      if (positionArrayWatched >= 0) {
        myLibrary.watched.splice(positionArrayWatched, 1);
        addToWatched.classList.remove('btn-remove');
        addToWatched.textContent = 'Add to watched';
        localStorage.setItem('watched', JSON.stringify(myLibrary.watched));
      }
      myLibrary.queue.push(idMovie);

      addToQueue.classList.add('btn-remove');
      addToQueue.textContent = 'Remove queue';
    }
    localStorage.setItem('queue', JSON.stringify(myLibrary.queue));
    localStorage.setItem('watched', JSON.stringify(myLibrary.watched));
  }
  addToQueue.addEventListener('click', onAddToQueue);

  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', hideModalMovieWindow);
}
