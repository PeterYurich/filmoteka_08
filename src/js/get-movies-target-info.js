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
            // switch (genresArray.length) {
            //     case "0":
            //         genres = "genres aren't specified"
            //         break

            //         case "1":
            //         genres = firstGenre;
            //         break;

            //     case "2":
            //         genres = [firstGenre, secondGenre].join(", ");
            //         break;

            //     default:
            //         genres = `${firstGenre}, ${secondGenre}, ...`;
            // }
            function resolveGenres(genresArray) {
                if (genresArray.length > 2) {
                    genres = `${firstGenre}, ${secondGenre}, ...`;
                } else if (genresArray.length === 2) {
                    genres = `${firstGenre}, ${secondGenre}`;
                } else if (genresArray.length === 1) {
                    genres = `${firstGenre}`
                } else if (genresArray.length === 0) {
                    genres = "genre isn't specified"
                };

            }
            resolveGenres(genresArray)

            const title = film.original_title
            const releaseYear = Number.parseInt(film.release_date)
            const posterPath = film.poster_path
            const rating = film.vote_average.toFixed(2)
            const id = film.id
            const description = film.overview
            const votes = film.vote_count
            const popularity = film.popularity
            const originalTitle = film.original_title
            return { id, posterPath, title, genres, releaseYear, rating, votes, popularity, originalTitle, description }
        })
        return theMoviesTargetInfo

    } catch (error) {
        console.log(error)
    }
}

export { getTheMoviesTargetInfo }
