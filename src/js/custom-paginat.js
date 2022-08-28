import { TheMovieDb } from './fetch';
import { loadRequestedMovies } from './load-pop-movies';
const list_element = document.getElementById('list');
const paginations_element = document.getElementById('pagination');

let current_page = 1;
let rows = 9;
const mediaTypes = 'movie'; //дані для отримання масиву з фільмами
const timeWindow = 'day';

const popMovies = await TheMovieDb.fetchPopularMovies(mediaTypes, timeWindow); //отримання масиву фільмів
console.log(popMovies);

setupPagination(popMovies, paginations_element, rows);

function setupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = '';
    let page_count = Math.ceil(items.length / rows_per_page); //рахуємо загальне число сторінок

    for (let i = 1; i < page_count + 1; i++) {
        //додаємо нову кнопки сторінки
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}
function PaginationButton(page, items) {
    //функція створення кнопок та події на кнопках
    let button = document.createElement('button');
    button.innerText = page;

    if (current_page === page) {
        button.classList.add('active');
    }

    button.addEventListener('click', () => {
        current_page = page;
        // loadRequestedMovies();
        // DisplayList(items, list_element, rows, current_page); /// Потрібно замінити на функцію запуску розмітки
        let current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}
