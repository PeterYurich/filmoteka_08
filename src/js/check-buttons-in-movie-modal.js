export function checkButtonAddToWatched(e) {
  const addToWatched = document.querySelector('.btn-add-to-watched');
  const localStorageWathed = JSON.parse(localStorage.getItem('watched'));
  const idMovie = e.target.dataset.id;
  const positionArrayIdMovie = localStorageWathed.findIndex(
    item => item === idMovie
  );
  if (positionArrayIdMovie >= 0) {
    addToWatched.textContent = 'Remove watched';
    addToWatched.classList.add('btn-remove');
  }
}

export function checkButtonAddToQueue(e) {
  const addToQueue = document.querySelector('.btn-add-to-queue');
  const localStorageQueue = JSON.parse(localStorage.getItem('queue'));
  const idMovie = e.target.dataset.id;
  const positionArrayIdMovie = localStorageQueue.findIndex(
    item => item === idMovie
  );
  if (positionArrayIdMovie >= 0) {
    addToQueue.textContent = 'Remove queue';
    addToQueue.classList.add('btn-remove');
  }
}
