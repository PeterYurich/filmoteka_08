function oneCardMarkup(film) {
    return `
<div class="movie-card" ">
    <div class="img-wrapper">
        <img class="movie-card-img" data-id="${film.id}" src="https://image.tmdb.org/t/p/w500${film.posterPath}"
            alt="https://image.tmdb.org/t/p/w500${film.posterPath}"
        onerror="this.onerror=null;this.src='https://i.ibb.co/ZdbF6pS/plug.jpg'" />
    </div>
    
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
