// import { TheMovieDb } from "./fetch";
// import { oneCardMarkup } from './oneCardMarkup';
// import { getGenres } from './get-genres';

// const fetchMovies = new TheMovieDb();

// const mediaTypes = "movie"
// const timeWindow = "day"

// async function loadPopularMovies(mediaTypes, timeWindow) {

//     try {
//         const popMovies = await fetchMovies.fetchPopularMovies(mediaTypes, timeWindow);

//         const popFilmsInfo = await popMovies.map(film => {
//             const genres = getGenres(film.genre_ids)
//             // const genres = genresArray.value
//             const title = film.title
//             const releaseData = film.release_date
//             const posterPath = film.poster_path
//             const rating = film.vote_average

//             return { posterPath, title, genres, releaseData, rating }
//         })

//         console.log(popFilmsInfo)



//         const markup = await popFilmsInfo.map(film => {
//             return oneCardMarkup(film)
//         }).join('');

//         const topListFilms = document.querySelector('.film-grid');
//         topListFilms.insertAdjacentHTML('beforeend', markup);
//     } catch (error) {
//         console.log(error)
//     }
// }

// loadPopularMovies(mediaTypes, timeWindow)
