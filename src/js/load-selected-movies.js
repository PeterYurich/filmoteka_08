import { getMoviesDetails } from "./getMoviesDetails";
import { oneCardMarkup } from './oneCardMarkup';
import { getGenres, df } from './get-genres';

async function loadSelectedMovies(ids) {

    try {
        const selectedMovies = await getMoviesDetails(ids);

        const selectedFilmsTargetInfo = await selectedMovies.map(film => {
            const genresArray = film.genres.map(item => item.name)
            const [firstGenre, secondGenre, ...others] = genresArray;
            let genres = ""
            switch (genresArray.length) {
                case "1":
                    genres = firstGenre;
                break;

                case "2":
                    genres = [firstGenre, secondGenre].join(", ");
                break;

                default:
                    genres = `${firstGenre}, ${secondGenre}, ...`;
                        
            }
            const title = film.original_title
            const releaseYear = Number.parseInt(film.release_date)
            const posterPath = film.poster_path
            const rating = film.vote_average.toFixed(2)
            const id = film.id

            return { posterPath, title, genres, releaseYear, rating, id }
        })

        // console.log("selectedFilmsTargetInfo:", selectedFilmsTargetInfo)



        const markup = await selectedFilmsTargetInfo.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const div = document.querySelector('.film-grid');
        div.insertAdjacentHTML('afterbegin', markup);
    } catch (error) {
        console.log(error)
    }
}

loadSelectedMovies([361743, 762504])
