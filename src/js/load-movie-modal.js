import { TheMovieDb } from './fetch';
import { modalMovieMarkup } from './modal-movie-markup';
import { getMoviesDetails } from './getMoviesDetails';

const theMovieDb1 = new TheMovieDb();
// let title = '';
// let posterImg = '';
// let vote = '';
// let votes = '';
// let popularity = '';
// let origTitle = '';
// let overview

async function loadModal(movieId) {
  try {
    const a = [];
    const movieS = await theMovieDb1.fetchMovieDetails(movieId);
    // const movieS = await getMoviesDetails(movieId);
    console.log('movies', movieS);
    a.push(movieS);
    console.log(a);
    let movieInfo = await a.map(movie => {
      const posterImg = movie.poster_path;
      const title = movie.title;
      const vote = movie.vote_average;
      const votes = movie.vote_count;
      const popularity = movie.popularity;
      const origTitle = movie.original_title;
      const overview = movie.overview;
      return { posterImg, title, vote, votes, popularity, origTitle, overview };
    });
    console.log('movieInfo', movieInfo);
    // modal.insertAdjacentHTML('beforeend', modalMovieMarkup);
    // const markup = movieInfo
    //   .map(item => {
    //     return modalMovieMarkup(item);
    //   })
    //   .join('');

    // const modal = document.querySelector('[data-modal]');
    // // const g = modalMovieMarkup(movieInfo);
    // // modal.innerHTML = modalMovieMarkup(a[0]);
    // modal.insertAdjacentHTML('beforeend', modalMovieMarkup);
  } catch (error) {
    console.log(error);
  }
}

// console.log('movieInfo', movieInfo);
// const markup = movieInfo
//   .map(item => {
//     return modalMovieMarkup(item);
//   })
//   .join('');

// const modal = document.querySelector('[data-modal]');
// const g = modalMovieMarkup(movieInfo);
// modal.innerHTML = modalMovieMarkup(a[0]);
// modal.insertAdjacentHTML('beforeend', modalMovieMarkup);
loadModal(361743);
export { loadModal };
