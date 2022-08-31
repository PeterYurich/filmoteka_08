import { oneCardMarkup } from '../components/one-card-markup';
import { TheMovieDb } from './fetch';
import { getTheMoviesTargetInfo } from './get-movies-target-info';
import { setPopPagination } from '../custom-pagination/set-pop-pagination';



async function loadPopMovies(page) {
    const fetchMovies = new TheMovieDb(page)
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

        setPopPagination(apiReply)
    } catch (error) {
        console.log(error);
    }
}

loadPopMovies(1);