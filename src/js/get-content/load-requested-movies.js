import { oneCardMarkup } from '../components/one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { showLoader, hideLoader } from '../components/loader';
import { paginationWrapper } from '../custom-pagination/make-pagination-markup'
import {setRequestedPagination} from '../custom-pagination/set-requested-pagination'

const requestMessage = document.querySelector('.alert');

async function loadRequestedMovies(e) {
    e.preventDefault();
    const containerMainPage = document.querySelector('.film-grid');
    paginationWrapper.innerHTML = '';
    showLoader();


    const inputEl = document.querySelector('.input');

    const query = inputEl.value;
    const fetchMovies = new TheMovieDb(1, query);
    // fetchMovies.query(query)

    try {
        const apiReply = await fetchMovies.fetchRequestedMovies();

        const foundMovies = apiReply.results;
        if (foundMovies.length === 0) {
            requestMessage.classList.remove('hide-load');
        }
        if (foundMovies.length !== 0) {
            requestMessage.classList.add('hide-load');
        }
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

const form = document.querySelector('.search-form');
form.addEventListener('submit', loadRequestedMovies);
