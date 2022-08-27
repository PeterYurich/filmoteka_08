import { TheMovieDb } from './fetch';

const theMovieDb = new TheMovieDb();

async function getMoviesDetails(filmIds) {
  try {
    const selectedFilms = [];
    for (let i = 0; i < filmIds.length; i += 1) {
      const film = await theMovieDb.fetchMovieDetails(filmIds[i]);
      selectedFilms.push(film);
    }

    // const selectedFilms = await filmIds.map( async id => await theMovieDb.fetchMovieDetails(id))

    // console.log('selectedFilms(from localStorage):', selectedFilms);

    return selectedFilms;
  } catch (error) {
    console.log(error);
  }
}
getMoviesDetails([361743]);

export { getMoviesDetails };
