import { oneCardMarkup } from './one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { showLoader, hideLoader } from './loader';
import {makeRequestedPaginationMarkup} from './make-requested-pagination-markup'
import Notiflix from 'notiflix';

const reguestMessage = document.querySelector('.alert');

const fetchMovies = new TheMovieDb();

const page = 1

import {makeRequestedPaginationMarkup, paginationWrapper} from './make-requested-pagination-markup'

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
            reguestMessage.classList.remove('hide-load');
        }
        if (foundMovies.length !== 0) {
            reguestMessage.classList.add('hide-load');
        }
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        hideLoader();
        containerMainPage.innerHTML = markup;
        makeRequestedPaginationMarkup(apiReply)
    } catch (error) {
        console.log(error);
    }
}

const form = document.querySelector('.search-form');
form.addEventListener('submit', loadRequestedMovies);
