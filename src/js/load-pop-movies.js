import { oneCardMarkup } from './oneCardMarkup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-target-movies';
import { makePaginationMarkup } from './custom-paginat';

const mediaType = 'movie';
const timeWindow = 'day';

const fetchMovies = new TheMovieDb();

async function loadRequestedMovies(mediaType, timeWindow) {
  try {
    const ApiReply = await fetchMovies.fetchPopularMovies(
      mediaType,
      timeWindow
    );

    const foundMovies = ApiReply.results;
    const foundMoviesIds = foundMovies.map(film => film.id);
    const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

    const markup = await FilmsToRender.map(film => {
      return oneCardMarkup(film);
    }).join('');

    const containerMainPage = document.querySelector('.film-grid');
    containerMainPage.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}

loadRequestedMovies(mediaType, timeWindow);
