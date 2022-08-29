import { oneCardMarkup } from './one-card-markup'
import { getTheMoviesTargetInfo } from "./get-movies-target-info"

const watched = document.querySelector('#watched')
const queue = document.querySelector('#queue')

watched.addEventListener('click', loadWatchedMovies)
queue.addEventListener('click', loadQueuedMovies)

function loadWatchedMovies(e) {
    e.preventDefault()
    let watchedMoviesIds = localStorage.getItem("watched")
    if (!watchedMoviesIds) {
        watchedMoviesIds = {}
    }
    else { watchedMoviesIds = JSON.parse(watchedMoviesIds) }
    
async function loadWatched() {

    try {
        console.log(watchedMoviesIds)
        // console.log(watchedMoviesIds)
        const FilmsToRender = await getTheMoviesTargetInfo(watchedMoviesIds)

        const markup = await FilmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMyLibPage = document.querySelector('.my-lib_film-grid');
        containerMyLibPage.innerHTML = markup
    } catch (error) {
        console.log(error)
    }
}
loadWatched()
}

function loadQueuedMovies(e) {
    e.preventDefault()
    let getQueueFilm = localStorage.getItem("watched")
    if (!getQueueFilm) {
        getQueueFilm = {}
    }
    else { getQueueFilm = JSON.parse(getQueueFilm) }
    
    async function loadQueue() {

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
loadQueue()
}