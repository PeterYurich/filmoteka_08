// import { TheMovieDb } from './get-content/fetch';


async function getGenres(genreIds) {
    const fetchMovies = new TheMovieDb();
    try {
        const listOfGenres = await fetchMovies.fetchGenreList();
        const genreArray = [];

        for (i = 0; i < genreIds.length; i += 1) {
            genreArray.push(listOfGenres.find(item => item.id === genreIds[i]));
        }
        const genreNames = genreArray.map(item => item.name);
        const [firstGenre, secondGenre, ...genres] = genreNames;
// console.log("genreNames", genreNames)
        if (genreNames.length > 2) {
            return `${firstGenre}, ${secondGenre}, ...`;
        } else if (genreNames.length === 2) {
            return `${firstGenre}, ${secondGenre}`;
        } else if (genreNames.length === 1)
            return `${firstGenre}`;
    } catch (error) {
        console.log(error);
    }
}

async function asd () {
    const df = await getGenres([154875])
    console.log(df)
}

// asd()

export { getGenres }