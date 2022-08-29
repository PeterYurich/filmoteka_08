import { oneCardMarkup } from './one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { showLoader, hideLoader } from './loader';
import {makeRequestedPaginationMarkup} from './make-requested-pagination-markup'

const fetchMovies = new TheMovieDb();

const page = 1

async function loadRequestedMovies(e) {
    e.preventDefault();
    const containerMainPage = document.querySelector('.film-grid');
    containerMainPage.innerHTML = '';
    showLoader();

    inputEl = document.querySelector('.input');

    const query = inputEl.value;

    try {
        const ApiReply = await fetchMovies.fetchRequestedMovies(query, page);
        const foundMovies = ApiReply.results;
        if (foundMovies.length === 0) {
            alert(`the film "${query} is not exist`)
        }
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = await filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        hideLoader();
        containerMainPage.innerHTML = markup;
        makeRequestedPaginationMarkup(ApiReply)
    } catch (error) {
        console.log(error);
    }
}

const form = document.querySelector('.search-form');
form.addEventListener('submit', loadRequestedMovies);
