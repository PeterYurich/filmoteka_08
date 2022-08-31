import { loadPopClickedPage } from "../get-content/load-pop-clicked-page"
const paginationWrapper = document.getElementById('pagination');

function makePopPaginationMarkup(apiReply) {
    paginationWrapper.innerHTML = '';
    const pageAmount = apiReply.total_pages;
    const currentPage = apiReply.page

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

    const buttons = document.querySelectorAll(".page-button")

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent == apiReply.page) {
            //якщо поточна сторінка дорівнює конкретної сторінкі масиву
            buttons[i].classList.add("btn-active");
        }
    }
    paginationWrapper.addEventListener("click", loadPopClickedPage)

}

export { makePopPaginationMarkup, paginationWrapper }
