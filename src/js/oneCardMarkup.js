function oneCardMarkup(film) {
    return `
    <div class="photo-card" data-id="${film.id}">
    <a class="photo-card__link">
        <img class="photo-card-img" src="https://image.tmdb.org/t/p/w500${film.posterPath}"
        alt="https://image.tmdb.org/t/p/w500${film.posterPath}" />
    </a>
    <div class="card-info">
        <h3 class="card-info__title">${film.title}</h3>
        <p>
        <span class="card-info__genre">
            ${film.genres}
        </span>
        <span class="release-date">
            ${Number.parseInt(film.releaseYear)}
        </span>
        <span class="film-rating">
            ${film.rating}
        </span>
        </p>
    </div>
    </div>
`}
export { oneCardMarkup };
