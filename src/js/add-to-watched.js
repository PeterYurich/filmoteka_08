// import { loadClickedMovies } from './load-clicked-movie';

// const addToWatched = document.querySelector('.btn-add-to-watched');
// const addToQueue = document.querySelector('.btn-add-to-queue');
// const LOCALSTORAGE_WATCHED = 'watched-films';
// const LOCALSTORAGE_QUEUE = 'queue-films';

// const myLibrary = {
//   watched: [],
//   queue: [],
// };

// addToWatched.addEventListener('click', onAddToWatched);
// addToQueue.addEventListener('click', onAddToQueue);

// function onAddToWatched(e) {
//   const idMovie = e.target.dataset.id;
//   console.log(idMovie);
//   localStorage.setItem(LOCALSTORAGE_WATCHED, JSON.stringify(idMovie));
//   addToWatched.textContent = 'Remove watched';
//   console.log(localStorage.getItem(LOCALSTORAGE_WATCHED));
// }

// function onAddToQueue() {
//   addToQueue.textContent = 'Remove queue';
// }
