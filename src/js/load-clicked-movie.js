import { getTheMoviesTargetInfo } from './get-target-movies';
import { modalMovieMarkup } from './modal-movie-markup';
import { onOpenOnClose } from './open-close-func';
import { onOpenModal } from './open-modal-window';

async function loadClickedMovies(e) {
    e.preventDefault();
    const containerMovie = document.querySelector('[data-modal]');
    containerMovie.innerHTML = '';

    if (e.target.tagName !== 'IMG') {
        return;
    }

    try {
        const arrayId = [];
        const id = e.target.dataset.id;
        arrayId.push(id);

        const FilmsToRender = await getTheMoviesTargetInfo(arrayId);

        const markup = await FilmsToRender.map(film => {
            return modalMovieMarkup(film);
        }).join('');
        containerMovie.innerHTML = markup;
        onOpenOnClose(e, id);
        onOpenModal()
    } catch (error) {
        console.log(error);
    }
}
const grid = document.querySelector('.film-grid');
grid.addEventListener('click', loadClickedMovies);
export { loadClickedMovies };
