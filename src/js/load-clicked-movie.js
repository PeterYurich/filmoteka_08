import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { modalMovieMarkup } from './modal-movie-markup';
import { addToWatchedAddToQueueCloseModal } from './add-to-localstorage-close-btn';
import { showModalMovieWindow } from './open-close-movie-modal';
import {
  checkButtonAddToWatched,
  checkButtonAddToQueue,
} from './check-buttons-in-movie-modal';

async function loadClickedMovies(e) {
  e.preventDefault();
  const containerMovie = document.querySelector('[data-modal]');
  containerMovie.innerHTML = '';

  if (e.target.tagName !== 'IMG') {
    return;
  }

  try {
    const arrayId = [];
    const id = e.target.dataset.id;
    arrayId.push(id);

    const FilmsToRender = await getTheMoviesTargetInfo(arrayId);

    const markup = await FilmsToRender.map(film => {
      return modalMovieMarkup(film);
    }).join('');
    containerMovie.innerHTML = markup;
    showModalMovieWindow();
    addToWatchedAddToQueueCloseModal(id);
    checkButtonAddToWatched(e);
    checkButtonAddToQueue(e);
  } catch (error) {
    console.log(error);
  }
}
const grid = document.querySelector('.film-grid');
grid.addEventListener('click', loadClickedMovies);
export { loadClickedMovies };
