import { oneCardMarkup } from './one-card-markup'
import { getTheMoviesTargetInfo } from "./get-movies-target-info"

const watched = document.querySelector('#watched')
const queue = document.querySelector('#queue')


watched.addEventListener('click', loadWatchedMovies)
queue.addEventListener('click', loadQueuedMovies)

async function loadWatchedMovies() {
    let watchedMoviesIds = localStorage.getItem("watched")
    if (!watchedMoviesIds) { watchedMoviesIds = {} }
    else { watchedMoviesIds = JSON.parse(watchedMoviesIds) }

    try {
        const filmsToRender = await getTheMoviesTargetInfo(watchedMoviesIds)
        const markup = await filmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMyLibPage = document.querySelector('.film-grid');
        containerMyLibPage.innerHTML = markup
    } catch (error) {
        console.log(error)
    }
    watched.classList.add('active-btn')
    queue.classList.remove('active-btn')
}

async function loadQueuedMovies() {
    let queuedMoviesIds = localStorage.getItem("queue")
    if (!queuedMoviesIds) { queuedMoviesIds = {} }
    else { queuedMoviesIds = JSON.parse(queuedMoviesIds) }

    try {
        const filmsToRender = await getTheMoviesTargetInfo(queuedMoviesIds)
        const markup = await filmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMyLibPage = document.querySelector('.film-grid');
        containerMyLibPage.innerHTML = markup
    } catch (error) {
        console.log(error)
    }
    watched.classList.remove('active-btn')
    queue.classList.add('active-btn')
}

// function loadQueuedMovies(e) {
//     e.preventDefault()
//     let getQueueFilm = localStorage.getItem("watched")
//     if (!getQueueFilm) {
//         getQueueFilm = {}
//     }
//     else { getQueueFilm = JSON.parse(getQueueFilm) }

//     async function loadQueue() {

//         try {
//             const foundMoviesIds = getQueueFilm.map(film => film.id)
//             const FilmsToRender = await getTheMoviesTargetInfo(foundMoviesIds)

//             const markup = await FilmsToRender.map(film => {
//                 return oneCardMarkup(film)
//             }).join('');

//             const containerMyLibPage = document.querySelector('.my-lib_film-grid');
//             containerMyLibPage.innerHTML = markup
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     loadQueue()
// }