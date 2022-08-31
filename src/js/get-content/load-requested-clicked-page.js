import { oneCardMarkup } from '../components/one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { showLoader, hideLoader } from '../components/loader';
import { setRequestedPagination, paginationWrapper } from '../custom-pagination/set-requested-pagination';


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

    try {
        const apiReply = await fetchMovies.fetchRequestedMovies();
        const foundMovies = apiReply.results;
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

export { loadRequestedClickedPage }