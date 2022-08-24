import { FetchMovies } from "./fetch";

const fetchMovies = new FetchMovies();

async function loadPopularMovies() {

try {
    const items = await fetchMovies.fetchPopularMovies();
        console.log(items)
    } catch (error) {
        console.log(error)
    }    
}

loadPopularMovies()