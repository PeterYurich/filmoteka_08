import { TheMovieDb } from "./fetch.js"
import { oneCardMarkup } from './one-card-markup';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { makePopPaginationMarkup, paginationWrapper } from './make-pop-pagination-markup';

async function loadPopClickedPage(e) {
    e.preventDefault();
    if (e.target.nodeName !== "BUTTON") { return }


    paginationWrapper.innerHTML = '';

    const clickedPage = e.target.textContent;
    const fetchMovies = new TheMovieDb(clickedPage)
    // fetchMovies.page(clickedPage)

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

        makePopPaginationMarkup(apiReply);

    } catch (error) {
        console.log(error);
    }
}

export { loadPopClickedPage }
