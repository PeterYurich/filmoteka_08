function oneCardMarkup(film) {
    return `
    <div class="photo-card" ">
    <a class="photo-card__link">
        <img class="photo-card-img" data-id="${film.id}" src="https://image.tmdb.org/t/p/w500${film.posterPath
        }"
        alt="https://image.tmdb.org/t/p/w500${film.posterPath}"
        onerror="this.onerror=null;this.src='https://i.ibb.co/ZdbF6pS/plug.jpg'" />
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
`;
}
export { oneCardMarkup };