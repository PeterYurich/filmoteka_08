import { TheMovieDb } from "./fetch";
import { oneCardMarkup } from './oneCardMarkup';
// import { getGenres } from './get-genres';

const fetchMovies = new TheMovieDb();

const mediaTypes = "movie"
const timeWindow = "day"

async function loadPopularMovies(mediaTypes, timeWindow) {

try {
    const data = await fetchMovies.fetchPopularMovies(mediaTypes, timeWindow);
    const items = await data.results;
    const markup = await items.map(item => {
        return oneCardMarkup(item)
    }).join('');

    const topListFilms = document.querySelector('.film-grid');
    topListFilms.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
        console.log(error)
    }    
}

loadPopularMovies("movie", "day")
