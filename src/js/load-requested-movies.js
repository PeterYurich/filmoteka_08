import { getMoviesDetails } from "./get-movies-details";
import { oneCardMarkup } from './oneCardMarkup';
import { TheMovieDb } from "./fetch";
import { TargetMoviesInfo } from "./get-target-movies"

const query = "forest"
const mediaType = "movie"

const fetchMovies = new TheMovieDb();

async function loadRequestedMovies(query, mediaType) {

    try {
        const ApiReply = await fetchMovies.fetchRequestedMovies(query, mediaType);

        const foundMovies = ApiReply.results
        console.log("foundMovies:", foundMovies)

        const foundMoviesIds = foundMovies.map(film => film.id)

        console.log(foundMoviesIds)


        
        const markup = await selectedFilmsTargetInfo.map(film => {
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