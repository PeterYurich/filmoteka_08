import { TheMovieDb } from "./fetch";
import { oneCardMarkup } from './one-card-markup';
import { getGenres } from './(get-genres)';

const fetchMovies = new TheMovieDb();



async function loadPopularMovies() {

    try {
        const ApiReply = await fetchMovies.fetchPopularMovies("1");

        const foundMovies = ApiReply.results;
        const popFilmsInfo = await foundMovies.map(async film => {
            const genresPromise = await getGenres(film.genre_ids)
            const genres = await Promise.all(genresPromise).then(res => res)
            const title = film.title
            const releaseData = film.release_date
            const posterPath = film.poster_path
            const rating = film.vote_average

            return { posterPath, title, genres, releaseData, rating }
        })

        console.log(popFilmsInfo)

        const markup = await popFilmsInfo.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const topListFilms = document.querySelector('.film-grid');
        topListFilms.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
        console.log(error)
    }
}

loadPopularMovies()
