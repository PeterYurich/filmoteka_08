import { getTheMoviesTargetInfo } from './get-target-movies';
import { modalMovieMarkup } from './modal-movie-markup';
import { onOpenOnClose } from './open-close-func';

async function loadClickedMovies(e) {
  //   e.preventDefault();
  const containerMovie = document.querySelector('[data-modal]');
  containerMovie.innerHTML = '';
  //   if (e.target.nodeName !== 'IMG') {

  const arrayId = [];

  arrayId.push(e.target.dataset.id);

  try {
    const FilmsToRender = await getTheMoviesTargetInfo(arrayId);

    const markup = await FilmsToRender.map(film => {
      return modalMovieMarkup(film);
    }).join('');

    containerMovie.innerHTML = markup;
    onOpenOnClose(e);
  } catch (error) {
    console.log(error);
  }
}

const grid = document.querySelector('.film-grid');
grid.addEventListener('click', loadClickedMovies);
export { loadClickedMovies };
