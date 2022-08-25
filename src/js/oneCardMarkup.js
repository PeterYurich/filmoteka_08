function oneCardMarkup(item) {
  return `
  <div class="container photo-card">
  <a class="photo-card__link">
      <img class="photo-card-img" src="${item.poster_path}" alt="${item.backdrop_path}" />
  </a>
  <div class="card-info">
      <a>
          <p class="card-info__title">${item.title}</p>
          <p class="card-info__genre">
              ${item.genre_ids}<span class="info-separator">${item.release_date}</span><span class="film-raiting">${item.vote_average}</span>
          </p>
      </a>
  </div>
</div>`;
}
export default { oneCardMarkup };
