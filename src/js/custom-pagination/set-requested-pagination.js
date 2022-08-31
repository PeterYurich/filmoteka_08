import { loadRequestedClickedPage } from "../get-content/load-requested-clicked-page"
import { makePaginationMarkup, paginationWrapper } from "./make-pagination-markup"
import { goToNextRequestedPage, goToPreviousRequestedPage } from './set-arrows-requested'

function setRequestedPagination(apiReply) {
    makePaginationMarkup(apiReply)
    paginationWrapper.addEventListener("click", loadRequestedClickedPage)

    const nextPageBtn = document.querySelector(".next-page")
    const previousPageBtn = document.querySelector(".previous-page")
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', goToNextRequestedPage)
    }

    if (previousPageBtn) {
        previousPageBtn.addEventListener('click', goToPreviousRequestedPage)
    }
}

export { setRequestedPagination, paginationWrapper }