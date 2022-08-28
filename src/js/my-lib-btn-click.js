import { oneCardMarkup } from './oneCardMarkup'
import { TheMovieDb } from "./fetch";
import { getTheMoviesTargetInfo } from "./get-target-movies"

const watched = document.querySelector('#watched')
const queue = document.querySelector('#queue')

watched.addEventListener('click', setItemWatched)
queue.addEventListener('click', setItemQueue)

function setItemWatched(e) {
    e.preventDefault()
    let getWatchedFilm = localStorage.getItem("watched")
    if (!getWatchedFilm) {
        getWatchedFilm = {}
    }
    else { getWatchedFilm = JSON.parse(getWatchedFilm) }
    
async function loadWatchedMovies() {

    try {
        const foundMoviesIds = getWatchedFilm.map(film => film.id)
        const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds)

        const markup = await FilmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMyLibPage = document.querySelector('.my-lib_film-grid');
        containerMyLibPage.innerHTML = markup
    } catch (error) {
        console.log(error)
    }
}
loadWatchedMovies()
}

function setItemQueue(e) {
    e.preventDefault()
    let getQueueFilm = localStorage.getItem("watched")
    if (!getQueueFilm) {
        getQueueFilm = {}
    }
    else { getQueueFilm = JSON.parse(getQueueFilm) }
    
    async function loadQueueMovies() {

    try {
        const foundMoviesIds = getQueueFilm.map(film => film.id)
        const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds)

        const markup = await FilmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMyLibPage = document.querySelector('.my-lib_film-grid');
        containerMyLibPage.innerHTML = markup
    } catch (error) {
        console.log(error)
    }
}
loadQueueMovies()
}