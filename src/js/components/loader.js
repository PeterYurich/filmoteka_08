const pagePreloader = document.querySelector('.mask');

function showLoader() {
  pagePreloader.classList.remove('hide-load');
}
function hideLoader() {
  pagePreloader.classList.add('hide-load');
}

export { showLoader, hideLoader };

window.addEventListener('load', () => {
  setTimeout(() => {
    pagePreloader.classList.add('hide-load');
  }, 200);
});
