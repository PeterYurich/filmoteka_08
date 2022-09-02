import { oneCardMarkup } from '../components/one-card-markup'
import { getTheMoviesTargetInfo } from "./get-movies-target-info"

const watched = document.querySelector('#watched')
const queue = document.querySelector('#queue')

async function loadWatchedMovies() {
    let watchedMoviesIds = localStorage.getItem("watched")
    if (!watchedMoviesIds) { watchedMoviesIds = {} }
    else { watchedMoviesIds = JSON.parse(watchedMoviesIds) }

    try {
        const filmsToRender = await getTheMoviesTargetInfo(watchedMoviesIds)
        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMyLibPage = document.querySelector('.film-grid');
        containerMyLibPage.innerHTML = markup
        const message = document.querySelector('.message-wrapper')
        if (containerMyLibPage.childElementCount > 0) {
            message.classList.add('hide-load');
        }
    
    } catch (error) {
        console.log(error)
    }
}

async function loadQueuedMovies() {    
    let queuedMoviesIds = localStorage.getItem("queue")
    if (!queuedMoviesIds) { queuedMoviesIds = {} }
    else { queuedMoviesIds = JSON.parse(queuedMoviesIds) }

    try {
        const filmsToRender = await getTheMoviesTargetInfo(queuedMoviesIds)
        const markup = filmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMyLibPage = document.querySelector('.film-grid');
        containerMyLibPage.innerHTML = markup
        const message = document.querySelector('.message-wrapper')
        if (containerMyLibPage.childElementCount > 0) {
            message.classList.add('hide-load');
        }
    } catch (error) {
        console.log(error)
    }
}

function onQueue () {
    watched.classList.remove('active-btn')
    queue.classList.add('active-btn')
    loadQueuedMovies()
}

function onWatched () {
    watched.classList.add('active-btn')
    queue.classList.remove('active-btn')
    loadWatchedMovies()
}

onQueue()
watched.addEventListener('click', onWatched)
queue.addEventListener('click', onQueue)

export { loadQueuedMovies, loadWatchedMovies, }