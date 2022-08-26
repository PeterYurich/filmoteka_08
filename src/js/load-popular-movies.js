import { TheMovieDb } from "./fetch";

const fetchMovies = new TheMovieDb();

const mediaTypes = "movie"
const timeWindow = "day"

async function loadPopularMovies(mediaTypes, timeWindow) {

try {
    const items = await fetchMovies.fetchPopularMovies(mediaTypes, timeWindow);
        console.log("pop movies:", items)
    } catch (error) {
        console.log(error)
    }    
}

loadPopularMovies(mediaTypes, timeWindow)
