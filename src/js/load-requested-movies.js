import { oneCardMarkup } from './oneCardMarkup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-target-movies';
import { showLoader, hideLoader } from './loader';

const fetchMovies = new TheMovieDb();

async function loadRequestedMovies(e) {
  e.preventDefault();
  const containerMainPage = document.querySelector('.film-grid');
  containerMainPage.innerHTML = '';
  showLoader();

  inputEl = document.querySelector('.input');

  const query = inputEl.value;
  const mediaType = 'movie';

  try {
    const ApiReply = await fetchMovies.fetchRequestedMovies(query, mediaType);
    const foundMovies = ApiReply.results;
    const foundMoviesIds = foundMovies.map(film => film.id);
    const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

    const markup = await FilmsToRender.map(film => {
      return oneCardMarkup(film);
    }).join('');

    hideLoader();
    containerMainPage.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}

const form = document.querySelector('.search-form');
form.addEventListener('submit', loadRequestedMovies);
