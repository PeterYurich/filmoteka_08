import { TheMovieDb } from "./get-content/fetch";
import { oneCardMarkup } from './components/one-card-markup';
import { getGenres } from './(get-genres)';

async function loadPopularMovies() {
    const fetchMovies = new TheMovieDb(1);
    try {
        const apiReply = await fetchMovies.fetchPopularMovies();
        const foundMovies = apiReply.results;
        const popFilmsInfo = await foundMovies.map(async film => {
            const genresPromise = await getGenres(film.genre_ids)
            const genres = await Promise.all(genresPromise).then(res => res)
            const title = film.title
            const releaseData = film.release_date
            const posterPath = film.poster_path
            const rating = film.vote_average

            return { posterPath, title, genres, releaseData, rating }
        })

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
