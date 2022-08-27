import { getMoviesDetails } from "./get-movies-details";
import { oneCardMarkup } from './oneCardMarkup';
import { TheMovieDb } from "./fetch";
import { getTheMoviesTargetInfo } from "./get-target-movies"

const query = "gun"
const mediaType = "movie"

const fetchMovies = new TheMovieDb();

async function loadRequestedMovies(query, mediaType) {

    try {
        const ApiReply = await fetchMovies.fetchRequestedMovies(query, mediaType);

        const foundMovies = ApiReply.results
        console.log("foundMovies:", foundMovies)

        const foundMoviesIds = foundMovies.map(film => film.id)

        console.log(foundMoviesIds)

        const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds)

        console.log("FilmsToRender:", FilmsToRender)

        const markup = await FilmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const div = document.querySelector('.film-grid');
        div.insertAdjacentHTML('afterbegin', markup);
    } catch (error) {
        console.log(error)
    }
}

console.log("sdf")

loadRequestedMovies(query, mediaType)