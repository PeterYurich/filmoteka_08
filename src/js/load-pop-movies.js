import { oneCardMarkup } from './one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { makePopPaginationMarkup } from './make-pop-pagination-markup';
import Notiflix from 'notiflix';


const fetchMovies = new TheMovieDb()

async function loadPopMovies() {
    try {
        const ApiReply = await fetchMovies.fetchPopularMovies("1");

        Notiflix.Notify.success(`${ApiReply.total_results} movies are found` )
        const foundMovies = ApiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        const containerMainPage = document.querySelector('.film-grid');
        containerMainPage.innerHTML = markup;

        makePopPaginationMarkup(ApiReply)
    } catch (error) {
        console.log(error);
    }
}

loadPopMovies();