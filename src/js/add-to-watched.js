const refsBtn = {
  addToWatched: document.querySelector('.btn-add-to-watched'),
  addToQueue: document.querySelector('.btn-add-to-queue'),
};

const myLibrary = {
  watched: [],
  queue: [],
};

refsBtn.addToWatched.addEventListener('click', onAddToWatched);
refsBtn.addToQueue.addEventListener('click', onAddToQueue);

function onAddToWatched(e) {
  const idMovie = 361743;
  localStorage.setItem(myLibrary.watched, JSON.stringify(idMovie));
  refsBtn.addToWatched.textContent = 'Remove watched';
  console.log(localStorage.getItem(LOCALSTORAGE_INPUT_KEY));
}

function onAddToQueue() {
  refsBtn.addToQueue.textContent = 'Remove queue';
}
