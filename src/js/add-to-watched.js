const refsBtn = {
  addToWatched: document.querySelector('.btn-add-to-watched'),
  addToQueue: document.querySelector('.btn-add-to-queue'),
};

refsBtn.addToWatched.addEventListener('click', onAddToWatched);
refsBtn.addToQueue.addEventListener('click', onAddToQueue);

function onAddToWatched() {
  refsBtn.addToWatched.textContent = 'Remove watched';
}

function onAddToQueue() {
  refsBtn.addToQueue.textContent = 'Remove queue';
}
