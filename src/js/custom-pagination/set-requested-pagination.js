import { loadRequestedClickedPage } from "../get-content/load-requested-clicked-page"
import { makePaginationMarkup, paginationWrapper} from "./make-pagination-markup"

function setRequestedPagination(apiReply) {
    makePaginationMarkup(apiReply)
    paginationWrapper.addEventListener("click", loadRequestedClickedPage)
}

export { setRequestedPagination, paginationWrapper }
