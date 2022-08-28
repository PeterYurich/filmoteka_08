import { getTheMoviesTargetInfo } from './get-target-movies';
import { modalMovieMarkup } from './modal-movie-markup';
import { onOpenOnClose } from './open-close-func';
let temp = '';
async function loadClickedMovies(e) {
  // e.preventDefault();
  const containerMovie = document.querySelector('[data-modal]');
  containerMovie.innerHTML = '';
  // let target = e.target;
  // console.log(target);

  // if (target.tagName !== 'IMG') {
  //   return;
  // }
  // const card = document.querySelector('.photo-card__link');
  // card.setAttribute('modal-open', null);
  // if (e.target.classList.contains('photo-card__link')) {
  //   return;
  // }

  const arrayId = [];
  const id = e.target.dataset.id;
  arrayId.push(id);
  console.log(arrayId);
  temp = id;

  console.log(temp);

  try {
    const FilmsToRender = await getTheMoviesTargetInfo(arrayId);

    const markup = await FilmsToRender.map(film => {
      return modalMovieMarkup(film);
    }).join('');

    containerMovie.innerHTML = markup;
    onOpenOnClose(e, temp);
  } catch (error) {
    console.log(error);
  }
}
const grid = document.querySelector('.film-grid');
grid.addEventListener('click', loadClickedMovies);
export { loadClickedMovies };
