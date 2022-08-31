import { loadPopClickedPage } from "../get-content/load-pop-clicked-page"
import { makePaginationMarkup, paginationWrapper } from "./make-pagination-markup"
import { goToNextPopPage, goToPreviousPopPage } from './set-arrows-pop'

function setPopPagination(apiReply) {
    makePaginationMarkup(apiReply)
    paginationWrapper.addEventListener("click", loadPopClickedPage)

    const nextPageBtn = document.querySelector(".next-page")
    const previousPageBtn = document.querySelector(".previous-page")
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', goToNextPopPage)
    }

    if (previousPageBtn) {
        previousPageBtn.addEventListener('click', goToPreviousPopPage)
    }
}

export { setPopPagination }