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
    const [firstGenge, secondGenre, ...genres] = genreNames;

    if (genreNames.length > 2) {
        return `${firstGenge}, ${secondGenre}, Others`;
    } else if (genreNames.length === 2) {
        return `${firstGenge}, ${secondGenre}`;
    } else if (genreNames.length === 1)
        return `${firstGenge}`;
    } catch (error) {
        console.log(error)
    }    
}

export {getGenres}
