
function oneCardMarkup(item) {
    return `<div class="photo-card">
      <a class="photo-card__link">
        <img
          class="photo-card-img"
          src="${item.poster_path}"
          alt="${item.backdrop_path}"
        />
        <div>
          <p class="photo-card__title">${item.title}</p>
          <p class="photo-card__genre">${item.genre_ids}</p>
        </div>
      </a>
    </div>`
}
export default{oneCardMarkup}