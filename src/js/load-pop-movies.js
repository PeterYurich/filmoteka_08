import { oneCardMarkup } from './oneCardMarkup';
import { TheMovieDb } from "./fetch";
import { getTheMoviesTargetInfo } from "./get-target-movies"

const mediaType = "movie"
const timeWindow = "day"

const fetchMovies = new TheMovieDb();

async function loadPopMovies(mediaType, timeWindow) {

    try {
        const ApiReply = await fetchMovies.fetchPopularMovies(mediaType, timeWindow);

        // const foundMovies = ApiReply.results
        const foundMoviesIds = ApiReply.map(film => film.id)
        const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds)

        const markup = await FilmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMainPage = document.querySelector('.film-grid');
        containerMainPage.innerHTML = markup
    } catch (error) {
        console.log(error)
    }
}

loadPopMovies(mediaType, timeWindow)