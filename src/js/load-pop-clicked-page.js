import { TheMovieDb } from "./fetch.js"
import { oneCardMarkup } from './oneCardMarkup';
import { getTheMoviesTargetInfo } from './get-target-movies';
import { makePopPaginationMarkup } from './make-pop-pagination-markup';

async function loadPopClickedPage(e) {
    e.preventDefault();

    const clickedPage = e.target.textContent;
    const fetchMovies = new TheMovieDb()

    try {
        const ApiReply = await fetchMovies.fetchPopularMovies(clickedPage);

        const foundMovies = ApiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = await FilmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        const containerMainPage = document.querySelector('.film-grid');
        containerMainPage.innerHTML = markup;

        makePopPaginationMarkup(ApiReply);

    } catch (error) {
        console.log(error);
    }
}

export { loadPopClickedPage }
