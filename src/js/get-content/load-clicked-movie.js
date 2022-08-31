import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { modalMovieMarkup } from '../modal-windows/movie-modal-markup';
import { addToWatchedAddToQueueCloseModal } from '../modal-windows/add-to-localstorage-close-btn';
import { showModalMovieWindow } from '../modal-windows/open-close-movie-modal';
import {
  checkButtonAddToWatched,
  checkButtonAddToQueue,
} from '../modal-windows/check-buttons-in-movie-modal';

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

    const filmsToRender = await getTheMoviesTargetInfo(arrayId);

    const markup = await filmsToRender
      .map(film => {
        return modalMovieMarkup(film);
      })
      .join('');
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
