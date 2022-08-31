import { loadPopMovies } from "../get-content/load-pop-movies";
import { loadRequestedMovies } from "../get-content/load-requested-movies";

let currentPageNumber = 1

const paginationWrapper = document.getElementById('pagination');

function makePaginationMarkup(apiReply) {
    paginationWrapper.innerHTML = '';
    const pageAmount = apiReply.total_pages;
    const currentPage = apiReply.page;

    if (pageAmount === 0) { return }

    // початок сторінок
    if (currentPage === 1) {
        for (let i = currentPage; i < currentPage + 5; i++) {
            paginationWrapper.insertAdjacentHTML("beforeend", `<button class="page-button">${i}</button>`)
        }
    }

    // кінець сторінок
    if (currentPage === pageAmount) {
        for (let i = currentPage - 4; i < currentPage; i++) {
            paginationWrapper.insertAdjacentHTML("beforeend", `<button class="page-button">${i}</button>`)
        }
    } else if (currentPage === pageAmount - 1) {
        for (let i = currentPage - 3; i < currentPage + 1; i++) {
            paginationWrapper.insertAdjacentHTML("beforeend", `<button class="page-button">${i}</button>`)
        }
    } else if (currentPage === pageAmount - 2) {
        for (let i = currentPage - 2; i < currentPage + 2; i++) {
            paginationWrapper.insertAdjacentHTML("beforeend", `<button class="page-button">${i}</button>`)
        }
    }

    // середина сторінок (за замовчуванням)
    if (currentPage >= 2 && currentPage <= pageAmount - 3) {
        for (let i = currentPage - 1; i < currentPage + 4; i++) {
            paginationWrapper.insertAdjacentHTML("beforeend", `<button class="page-button">${i}</button>`)
        }
    }

    // якщо мало
    if (pageAmount === 1) {
        paginationWrapper.innerHTML = '';
    } else if (pageAmount >= 2 && pageAmount <= 10) {
        paginationWrapper.innerHTML = '';

        for (let i = 1; i < pageAmount; i++) {
            paginationWrapper.insertAdjacentHTML("beforeend", `<button class="page-button">${i}</button>`)
        }
    }

    // показати останню
    if (pageAmount > 10 && currentPage < pageAmount - 5) {
        paginationWrapper.insertAdjacentHTML("beforeend", '<div class="break-pagination">...</div>')
        paginationWrapper.insertAdjacentHTML("beforeend", `<button class="page-button">${pageAmount}</button>`)
    }

    // попередня сторінка 
    if (currentPage > 1) {
        paginationWrapper.insertAdjacentHTML("afterbegin", '<div class="arrow  previous-page">previous page</div>')
    }

    // наступна сторінка
    if (currentPage < pageAmount) {
        paginationWrapper.insertAdjacentHTML("beforeend", '<div class="arrow next-page">next page</div>')
    }

    //видалення стрілочок
    if (currentPage === 1) {
        const previousPageBtn = document.querySelector(".previous-page")
        if (previousPageBtn) {
            previousPageBtn.remove()
        }
    }

    if (currentPage === pageAmount) {
        const nextPageBtn = document.querySelector(".next-page")
        if (nextPageBtn) {
            nextPageBtn.remove()
        }
    }

    // поведінка стрілочок

    // 

    // loadRequestedMovies

    const buttons = document.querySelectorAll(".page-button")

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent == apiReply.page) {
            //якщо поточна сторінка дорівнює конкретної сторінці масиву
            buttons[i].classList.add("btn-active");
        }
    }

    currentPageNumber = currentPage
}

export { makePaginationMarkup, paginationWrapper, currentPageNumber }