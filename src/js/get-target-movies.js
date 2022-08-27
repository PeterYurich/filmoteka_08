import { oneCardMarkup } from './oneCardMarkup';
import { TheMovieDb } from "./fetch";

const theMovieDb = new TheMovieDb

async function getTheMoviesTargetInfo(filmIds) {

    try {

        const targetMovies = []
        for (let i = 0; i < filmIds.length; i += 1) {
            const film = await theMovieDb.fetchMovieDetails(filmIds[i])
            targetMovies.push(film)
        }

        // const selectedFilms = filmIds.map( async id => await theMovieDb.fetchMovieDetails(id))
        //

        const theMoviesTargetInfo = await targetMovies.map(film => {
            const genresArray = film.genres.map(item => item.name)
            const [firstGenre, secondGenre, ...others] = genresArray;
            let genres = ""
            switch (genresArray.length) {
                case "1":
                    genres = firstGenre;
                    break;

                case "2":
                    genres = [firstGenre, secondGenre].join(", ");
                    break;

                default:
                    genres = `${firstGenre}, ${secondGenre}, ...`;

            }
            const title = film.original_title
            const releaseYear = Number.parseInt(film.release_date)
            const posterPath = film.poster_path
            const rating = film.vote_average.toFixed(2)
            const id = film.id

            return { posterPath, title, genres, releaseYear, rating, id }
        })

        console.log("theMoviesTargetInfo:", theMoviesTargetInfo)

        return theMoviesTargetInfo

        // const markup = await theMoviesTargetInfo.map(film => {
        //     return oneCardMarkup(film)
        // }).join('');

        // const div = document.querySelector('.film-grid');
        // div.insertAdjacentHTML('afterbegin', markup);
    } catch (error) {
        console.log(error)
    }
}

export { getTheMoviesTargetInfo }

// getTheMoviesTargetInfo([361743, 762504])