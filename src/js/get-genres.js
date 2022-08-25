import { FetchMovies } from "./fetch";

const fetchMovies = new FetchMovies();

async function getGenres(genreIds) {

try {
    const itemsOfGenres = await fetchMovies.fetchGenres();
    const genreArray = [];

    for (i = 0; i < genreIds.length; i += 1) {
        genreArray.push(itemsOfGenres.find(item => item.id === genreIds[i]))
    };

    const genreNames = genreArray.map(item => item.name);
    console.log(genreNames)
    return genreNames
    } catch (error) {
        console.log(error)
    }    
}