const paginations_element = document.getElementById('pagination');

function makePaginationMarkup(filmsArray) {
  paginations_element.innerHTML = '';
  const page_amount = filmsArray.total_pages;
  let current_page = 1;

  for (let i = 1; i < page_amount + 1; i++) {
    const button = document.createElement('button');

    button.innerText = i;

    if (current_page === filmsArray.page) {
      //якщо поточна сторінка дорівнює конкретної сторінкі масиву
      button.classList.add('btn-active');
    }

    paginations_element.appendChild(button);
  }

  button.addEventListener('click', () => {
    current_page = filmsArray.page;
    const current_btn = document.querySelector('btn-active');
    current_btn.classList.remove('btn-active');
    button.classList.add('btn-active');
  });
}
export { makePaginationMarkup };
