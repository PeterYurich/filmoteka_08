import { oneCardMarkup } from '../components/one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { showLoader, hideLoader } from '../components/loader';
import { makeRequestedPaginationMarkup, paginationWrapper } from '../custom-pagination/make-requested-pagination-markup';


async function loadRequestedClickedPage(e) {
    e.preventDefault();
    if (e.target.nodeName !== "BUTTON") { return }

    const inputEl = document.querySelector('.input');
    const clickedPage = e.target.textContent;
    
    
    const containerMainPage = document.querySelector('.film-grid');
    paginationWrapper.innerHTML = '';
    showLoader();
    
    
    const query = inputEl.value;
    const fetchMovies = new TheMovieDb(clickedPage, query);
    // fetchMovies.query(query)
    // fetchMovies.page(clickedPage)

    try {
        const apiReply = await fetchMovies.fetchRequestedMovies();
// console.log(ApiReply)
        const foundMovies = apiReply.results;
        const foundMoviesIds = foundMovies.map(film => film.id);
        const filmsToRender = await getTheMoviesTargetInfo(foundMoviesIds);

        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film);
        }).join('');

        hideLoader();
        containerMainPage.innerHTML = markup;

        makeRequestedPaginationMarkup(apiReply)
        // addRequestListener()
    } catch (error) {
        console.log(error);
    }
}

export { loadRequestedClickedPage }