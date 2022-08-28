import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { loadRequestedMovie } from './load-pop-movies';
import { TheMovieDb } from './fetch';

// const container = document.getElementById('tui-pagination-container');

// const markupPagination = `<a href="#" class="tui-page-btn">{{page}}</a>
// <strong class="tui-page-btn tui-is-selected">{{page}}</strong>
// <a href="#" class="tui-page-btn tui-{{type}}">
// <span class="tui-ico-{{type}}">{{type}}</span>
// </a>
// <span class="tui-page-btn tui-is-disabled tui-{{type}}">
// <span class="tui-ico-{{type}}">{{type}}</span>
// </span>
// <a href="#" class="tui-page-btn tui-{{type}}-is-ellip">
// <span class="tui-ico-ellip">...</span>
// </a>`;
// container.innerHTML = markupPagination;

const options = {
  usageStatistics: false,
  totalItems: 100,
  itemsPerPage: 22,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

pagination.on('afterMove', event => {
  const { page } = event;
  loadPopularMovies();
  console.log(page);
});

instance.getCurrentPage();
