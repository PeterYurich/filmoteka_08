// import { getMoviesDetails } from "./get-movies-details";
// import { oneCardMarkup } from './oneCardMarkup';
// import { TheMovieDb } from "./fetch";


// const query = "forest"
// const mediaType = "movie"

// const fetchMovies = new TheMovieDb();

// async function loadRequestedMovies(query, mediaType) {

//     try {
//         const requiredMovies = await fetchMovies.fetchRequestedMovies(query, mediaType);

//         console.log("requiredMovies:", requiredMovies)

//         debugger

//         const selectedFilmsTargetInfo = await selectedMovies.map(film => {
//             const genresArray = film.genres.map(item => item.name)
//             const [firstGenre, secondGenre, ...others] = genresArray;
//             let genres = ""
//             switch (genresArray.length) {
//                 case "1":
//                     genres = firstGenre;
//                 break;

//                 case "2":
//                     genres = [firstGenre, secondGenre].join(", ");
//                 break;

//                 default:
//                     genres = `${firstGenre}, ${secondGenre}, ...`;
                        
//             }
//             const title = film.original_title
//             const releaseYear = Number.parseInt(film.release_date)
//             const posterPath = film.poster_path
//             const rating = film.vote_average.toFixed(2)
//             const id = film.id

//             return { posterPath, title, genres, releaseYear, rating, id }
//         })

//         const markup = await selectedFilmsTargetInfo.map(film => {
//             return oneCardMarkup(film)
//         }).join('');

//         const div = document.querySelector('.film-grid');
//         div.insertAdjacentHTML('afterbegin', markup);
//     } catch (error) {
//         console.log(error)
//     }
// }

// console.log("sdf")

// loadRequestedMovies(query, mediaType)