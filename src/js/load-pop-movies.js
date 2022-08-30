import { oneCardMarkup } from './one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { makePopPaginationMarkup } from './make-pop-pagination-markup';
import Notiflix from 'notiflix';



async function loadPopMovies() {
    const fetchMovies = new TheMovieDb(1)
    try {
        const apiReply = await fetchMovies.fetchPopularMovies();

        Notiflix.Notify.success(`${apiReply.total_results} movies are found`)
        const foundMovies = apiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        const containerMainPage = document.querySelector('.film-grid');
        containerMainPage.innerHTML = markup;

        makePopPaginationMarkup(apiReply)
    } catch (error) {
        console.log(error);
    }
}

loadPopMovies();