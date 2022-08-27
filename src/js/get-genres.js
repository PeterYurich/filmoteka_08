import { TheMovieDb } from './fetch';

const fetchMovies = new TheMovieDb();

async function getGenres(genreIds) {
  try {
    const listOfGenres = await fetchMovies.fetchGenreList();
    const genreArray = [];

    for (i = 0; i < genreIds.length; i += 1) {
      genreArray.push(listOfGenres.find(item => item.id === genreIds[i]));
    }

    const genreNames = genreArray.map(item => item.name);
    const [firstGenre, secondGenre, ...genres] = genreNames;

    if (genreNames.length > 2) {
      return `${firstGenre}, ${secondGenre}, ...`;
    } else if (genreNames.length === 2) {
      return `${firstGenre}, ${secondGenre}`;
    } else if (genreNames.length === 1) return `${firstGenre}`;
  } catch (error) {
    console.log(error);
  }
}

async function df() {
  asd = await getGenres([18, 28, 12]);
  console.log(asd);
}

// console.log(df())

export { getGenres, df };
