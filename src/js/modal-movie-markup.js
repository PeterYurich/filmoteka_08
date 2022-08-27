function modalMovieMarkup({
  posterImg,
  title,
  vote,
  votes,
  popularity,
  origTitle,
  overview,
}) {
  return `
    <div class="modal">
        <button type="button" class="modal__close-btn" data-modal-close>
        </button>
        <img src="https://image.tmdb.org/t/p/w500${posterImg}" class="modal__img" alt="${title}">
        <div class="modal__overview-wrapper">
            <h2 class="modal__title">${title}</h2>
            <div class="modal__list">
                <ul class="modal__list-description list">
                    <li class="modal__list-description-item">
                        <p class="modal__list-item-title">Vote / Votes</p>
                    </li>
                    <li class="modal__list-description-item">
                        <p class="modal__list-item-title">Popularity</p>
                    </li>
                    <li class="modal__list-description-item">
                        <p class="modal__list-item-title">Original Title</p>
                    </li>
                    <li class="modal__list-description-item">
                        <p class="modal__list-item-title">Genre</p>
                    </li>
                </ul>
                <ul class="modal__list-api list">
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value"><span
                                class="modal__list-item-value-vote">${vote_average}</span>&nbsp;/&nbsp;${vote_count}</p>
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value">${popularity}</p>
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value-original-title">${original_title}</p>
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value-genre">${genre_ids}</p>
                    </li>
                </ul>
            </div>

            <div class="modal__description-wrapper">
                <h3 class="modal__description-title">About</h3>
                <p class="modal__description-overwiew">${overview}</p>
            </div>
            <div class="modal__btn-wrapper">
                <button type="button" class="modal__btn btn-add-to-watched">add to watched</button>
                <button type="button" class="modal__btn btn-add-to-queue">add to queue</button>
            </div>
        </div>

    </div>
`;
}

export { modalMovieMarkup };
