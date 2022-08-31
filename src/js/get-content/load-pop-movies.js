import { oneCardMarkup } from '../components/one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { makePopPaginationMarkup } from '../custom-pagination/make-pop-pagination-markup';



async function loadPopMovies() {
    const fetchMovies = new TheMovieDb(1)
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

        makePopPaginationMarkup(apiReply)
    } catch (error) {
        console.log(error);
    }
}

loadPopMovies();