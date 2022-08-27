import { getTheMoviesTargetInfo } from "./get-target-movies"


async function loadClickedMovies(e) {
    e.preventDefault();
    console.log("target:" e.target)

    const movieId = e.target.dataset.id;

    try {

        const FilmsToRender = await getTheMoviesTargetInfo([movieId])
        console.log(FilmsToRender)

        const markup = await FilmsToRender.map(film => {
            return oneCardMarkup(film)
        }).join('');

        const containerMainPage = document.querySelector('.film-grid');
        containerMainPage.innerHTML = markup
    } catch (error) {
        console.log(error)
    }
}

const grid = document.querySelector('.film-grid')
form.addEventListener("click", loadClickedMovies)