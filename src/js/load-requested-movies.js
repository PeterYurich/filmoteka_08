import { oneCardMarkup } from './one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { showLoader, hideLoader } from './loader';
import {makeRequestedPaginationMarkup, paginationWrapper} from './make-requested-pagination-markup'
import Notiflix from 'notiflix';

const fetchMovies = new TheMovieDb();

const page = 1

async function loadRequestedMovies(e) {
    e.preventDefault();
    const containerMainPage = document.querySelector('.film-grid');
    paginationWrapper.innerHTML = '';
    showLoader();

    inputEl = document.querySelector('.input');

    const query = inputEl.value;

    try {
        const ApiReply = await fetchMovies.fetchRequestedMovies(query, page);
        
        Notiflix.Notify.success(`${ApiReply.total_results} movies are found` )
        const foundMovies = ApiReply.results;
        if (foundMovies.length === 0) {
            alert(`the film "${query} is not exist`)
        }
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
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
