import { getTheMoviesTargetInfo } from "./get-target-movies"
import { modalMovieMarkup } from "./modal-movie-markup"


async function loadClickedMovies(e) {
        e.preventDefault();
        console.log("target:", e.target)
        if (e.target.nodeName !== "IMG") {
            return;
        }

        const arrayId = []

        arrayId.push(e.target.dataset.id)

        try {

            const FilmsToRender = await getTheMoviesTargetInfo(arrayId)

            const markup = await FilmsToRender.map(film => {
                return modalMovieMarkup(film)
            }).join('');

            // const containerMainPage = document.querySelector('.film-grid');
            // containerMainPage.innerHTML = markup
        } catch (error) {
            console.log(error)
        }
    }

const grid = document.querySelector('.film-grid')
console.log(grid)
grid.addEventListener("click", loadClickedMovies)