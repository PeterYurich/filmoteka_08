import { oneCardMarkup } from './one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { showLoader, hideLoader } from './loader';
import { makeRequestedPaginationMarkup, paginationWrapper } from './make-requested-pagination-markup';


async function loadRequestedClickedPage(e) {
    e.preventDefault();

    const clickedPage = e.target.textContent;
    const fetchMovies = new TheMovieDb();

    const containerMainPage = document.querySelector('.film-grid');
    paginationWrapper.innerHTML = '';
    showLoader();

    inputEl = document.querySelector('.input');

    const query = inputEl.value;

    try {
        const ApiReply = await fetchMovies.fetchRequestedMovies(query, clickedPage);
// console.log(ApiReply)
        const foundMovies = ApiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        hideLoader();
        containerMainPage.innerHTML = markup;

        makeRequestedPaginationMarkup(ApiReply)
        // addRequestListener()
    } catch (error) {
        console.log(error);
    }
}

export { loadRequestedClickedPage }