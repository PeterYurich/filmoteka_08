import { TheMovieDb } from "./fetch";

const theMovieDb = new TheMovieDb

async function getMoviesDetails(filmIds) {

    try {
        const selectedFilms = []
        for (let i = 0; i < filmIds.length; i += 1) {
            const film = await theMovieDb.fetchMovieDetails(filmIds[i])
            selectedFilms.push(film)
        }
        console.log("selectedFilms(from localStorage):", selectedFilms)
    } catch {
        console.log(error)
    }
}

export { getMoviesDetails }

getMoviesDetails([361743, 762504])



