
function oneCardMarkup(item) {
    return `<div class="photo-card">
      <a class="photo-card__link">
        <img
          class="photo-card-img"
          src="${item.poster_path}"
          alt="${item.backdrop_path}"
        />
      </a>
      <div class="card-info">
        <a>
          <p class="card-info__title">${item.title}</p>
          <p class="card-info__genre">
            ${item.genre_ids}<span class="pseudo-element"
              >${item.release_date}</span
            >
          </p>
        </a>
      </div>
    </div>`
}
export default{oneCardMarkup}