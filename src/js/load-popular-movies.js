import { TheMovieDb } from "./fetch";

const fetchMovies = new TheMovieDb();

async function loadPopularMovies() {

try {
    const items = await fetchMovies.fetchPopularMovies();
        console.log("pop movies:", items)
    } catch (error) {
        console.log(error)
    }    
}

loadPopularMovies()
