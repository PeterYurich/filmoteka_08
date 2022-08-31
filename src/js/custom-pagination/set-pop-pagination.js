import { loadPopClickedPage } from "../get-content/load-pop-clicked-page"
import { makePaginationMarkup, paginationWrapper} from "./make-pagination-markup"

function setPopPagination (apiReply) {
    makePaginationMarkup(apiReply)
    paginationWrapper.addEventListener("click", loadPopClickedPage)
}

export { setPopPagination }