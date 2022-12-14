import { oneCardMarkup } from '../components/one-card-markup';
import { TheMovieDb } from '../get-content/fetch';
import { getTheMoviesTargetInfo } from '../get-content/get-movies-target-info';
import { setPopPagination } from '../custom-pagination/set-pop-pagination';

import { currentPageNumber } from './make-pagination-markup'

async function goToNextPopPage() {

    const nextPageNumber = currentPageNumber + 1;

    const fetchMovies = new TheMovieDb(nextPageNumber)
    try {
        const apiReply = await fetchMovies.fetchPopularMovies();

        const foundMovies = apiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        const containerMainPage = document.querySelector('.film-grid');
        containerMainPage.innerHTML = markup;

        setPopPagination(apiReply)
    } catch (error) {
        console.log(error);
    }
}

async function goToPreviousPopPage() {

    const previousPageNumber = currentPageNumber - 1;

    const fetchMovies = new TheMovieDb(previousPageNumber)
    try {
        const apiReply = await fetchMovies.fetchPopularMovies();

        const foundMovies = apiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        const containerMainPage = document.querySelector('.film-grid');
        containerMainPage.innerHTML = markup;

        setPopPagination(apiReply)
    } catch (error) {
        console.log(error);
    }
}

export { goToNextPopPage, goToPreviousPopPage }
