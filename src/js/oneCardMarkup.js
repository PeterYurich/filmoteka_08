function oneCardMarkup(item) {
  return `
    <div class="photo-card" data-id="${item.id}">
      <a class="photo-card__link">
        <img
          class="photo-card-img"
          src="https://image.tmdb.org/t/p/w500${item.poster_path}"
          alt="https://image.tmdb.org/t/p/w500${item.backdrop_path}"
        />
      </a>
      <div class="card-info">
        <h3 class="card-info__title">${item.title}</h3>
        <p>
          <span class="card-info__genre">
          ${item.genre_ids}
          </span>
          <span class="release-date">
          ${Number.parseInt(item.release_date)}
          </span>
          <span class="film-rating">
          ${item.vote_average.toFixed(1)}
          </span>
        </p>
      </div>
    </div>`;
}
export { oneCardMarkup };
