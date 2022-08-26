import { TheMovieDb } from "./fetch";

const fetchMovies = new TheMovieDb();

async function getGenres(genreIds) {

try {
    const listOfGenres = await fetchMovies.fetchGenreList();
    const genreArray = [];

    for (i = 0; i < genreIds.length; i += 1) {
        genreArray.push(listOfGenres.find(item => item.id === genreIds[i]))
    };

    const genreNames = genreArray.map(item => item.name);
    console.log("genreNames", genreNames)
    return genreNames
    } catch (error) {
        console.log(error)
    }    
}

export {getGenres}

// getGenres([28, 18])
