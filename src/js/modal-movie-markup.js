function modalMovieMarkup(film) {
    return `
    <div class="modal">
        <button type="button" class="modal__close-btn" data-modal-close>
        </button>
        <img src="https://image.tmdb.org/t/p/w500${film.posterPath}" class="modal__img" alt="${film.originalTitle}">
        <div class="modal__overview-wrapper">
            <h2 class="modal__title">${film.title}</h2>
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
                                class="modal__list-item-value-vote">${film.rating}</span>&nbsp;/&nbsp;${film.votes}</p>
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value">${film.popularity}</p>
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value-original-title">${film.originalTitle}</p>
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value-genre">${film.genres}</p>
                    </li>
                </ul>
            </div>

            <div class="modal__description-wrapper">
                <h3 class="modal__description-title">About</h3>
                <p class="modal__description-overview">${film.description}</p>
            </div>
            <div class="modal__btn-wrapper">
                <button type="button" class="modal__btn btn-add-to-watched">add to watched</button>
                <button type="button" class="modal__btn btn-add-to-queue">add to queue</button>
            </div>
            <div class="id" hidden>${film.id}</div>
        </div>
    </div>
`;
}

export { modalMovieMarkup };
