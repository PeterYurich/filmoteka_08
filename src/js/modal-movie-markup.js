function modalMovieMarkup(movieId) {
  return `
      <div class="modal">
        <button type="button" class="modal__close-btn" data-modal-close>
        </button>
        <img src="./images/example.jpg" class="modal__img" alt="${title}">
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
                                class="modal__list-item-value-vote">7.3</span>&nbsp;/&nbsp;1260</p>
                        <!-- <p class="modal__list-item-value"><span
                                        class="modal__list-item-value-vote">${vote_average}</span>&nbsp;/&nbsp;${vote_count}</p> -->
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value">100.2</p>
                        <!-- <p class="modal__list-item-value">${popularity}</p> -->
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value-original-title">A FISTFUL OF LEAD</p>
                        <!-- <p class="modal__list-item-value-original-title">${original_title}</p> -->
                    </li>
                    <li class="modal__list-item-api-value">
                        <p class="modal__list-item-value-genre">Western</p>
                        <!-- <p class="modal__list-item-value-genre">${genre_ids}</p> -->
                    </li>
                </ul>
            </div>

            <div class="modal__description-wrapper">
                <h3 class="modal__description-title">About</h3>
                <p class="modal__description-overwiew">${overview}Four of the West’s most infamous outlaws assemble
                    to
                    steal
                    a huge stash of gold from the most
                    corrupt
                    settlement of the
                    gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of
                    gold
                    hide out in the
                    abandoned gold mine where they happen across another gang of three – who themselves were
                    planning to
                    hit
                    the very same
                    bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled
                    with
                    lead... they’ve
                    been double crossed – but by who and how?</p>
            </div>
            <div class="modal__btn-wrapper">
                <button type="button" class="modal__btn btn-add-to-watched">add to Watched</button>
                <button type="button" class="modal__btn btn-add-to-queue">add to queue</button>
            </div>
        </div>

    </div>
`;
}

export { modalMovieMarkup };
