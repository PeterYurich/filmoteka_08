// import { TheMovieDb } from './fetch';

// async function loadModal(movieId) {
//   const theMovieDb1 = new TheMovieDb();
//   try {
//     const a = [];
//     const movieS = await theMovieDb1.fetchMovieDetails(movieId);

//     a.push(movieS);
//     let movieInfo = a.map(movie => {
//       const posterImg = movie.poster_path;
//       const title = movie.title;
//       const vote = movie.vote_average;
//       const votes = movie.vote_count;
//       const popularity = movie.popularity;
//       const origTitle = movie.original_title;
//       const overview = movie.overview;
//       return { posterImg, title, vote, votes, popularity, origTitle, overview };
//     });

//   } catch (error) {
//     console.log(error);
//   }
// }

// export { loadModal };
