import { oneCardMarkup } from '../components/one-card-markup';
import { TheMovieDb } from '../get-content/fetch';
import { getTheMoviesTargetInfo } from '../get-content/get-movies-target-info';
import { setRequestedPagination } from './set-requested-pagination';

import { currentPageNumber } from './make-pagination-markup'

async function goToNextRequestedPage() {

    nextPageNumber = currentPageNumber + 1;

    const containerMainPage = document.querySelector('.film-grid');
    paginationWrapper.innerHTML = '';
    showLoader();


    const query = inputEl.value;
    const fetchMovies = new TheMovieDb(nextPageNumber, query);

    try {
        const apiReply = await fetchMovies.fetchRequestedMovies();
        const foundMovies = apiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        hideLoader();
        containerMainPage.innerHTML = markup;

        setRequestedPagination(apiReply)
    } catch (error) {
        console.log(error);
    }
}

async function goToPreviousRequestedPage() {
    // loadPopMovies(nextPage);

    previousPageNumber = currentPageNumber - 1;
    const containerMainPage = document.querySelector('.film-grid');
    paginationWrapper.innerHTML = '';
    showLoader();


    const query = inputEl.value;
    const fetchMovies = new TheMovieDb(previousPageNumber, query);

    try {
        const apiReply = await fetchMovies.fetchRequestedMovies();
        const foundMovies = apiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        hideLoader();
        containerMainPage.innerHTML = markup;

        setRequestedPagination(apiReply)
    } catch (error) {
        console.log(error);
    }
}

export { goToNextRequestedPage, goToPreviousRequestedPage }
