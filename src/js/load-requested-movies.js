import { oneCardMarkup } from './oneCardMarkup';
import { TheMovieDb } from "./fetch";
import { getTheMoviesTargetInfo } from "./get-target-movies"


const fetchMovies = new TheMovieDb();

async function loadRequestedMovies() {
    console.log('asdf')

    const query = "gun"
    const mediaType = "movie"

    try {
        const ApiReply = await fetchMovies.fetchRequestedMovies(query, mediaType);
        console.log("reply", ApiReply)
        const foundMovies = ApiReply.results
        const foundMoviesIds = foundMovies.map(film => film.id)
        const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds)
        console.log(FilmsToRender)

        const markup = await FilmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMainPage = document.querySelector('.film-grid');
        containerMainPage.innerHTML = markup
    } catch (error) {
        console.log(error)
        
    }
}

const form = document.querySelector('.search')
form.addEventListener("submit", loadRequestedMovies())