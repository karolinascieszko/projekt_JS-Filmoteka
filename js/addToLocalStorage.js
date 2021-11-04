// add movies to local storage
const addLocalStorageWached = (key, data) => {
  let savedMovie = localStorage.getItem("watchedLocalStorage");
  savedMovie = savedMovie ? JSON.parse(savedMovie) : [];
  // add new movie
  if(savedMovie.includes(data)){savedMovie=savedMovie}
  else {savedMovie.push(data);}
  localStorage.setItem("watchedLocalStorage", JSON.stringify(savedMovie));
};

const addLocalStorageQueue = (key, data) => {
  let savedMovie = localStorage.getItem("queueLocalStorage");
  savedMovie = savedMovie ? JSON.parse(savedMovie) : [];
  // add new movie
  if(savedMovie.includes(data)){savedMovie=savedMovie}
  else {savedMovie.push(data);}
  localStorage.setItem("queueLocalStorage", JSON.stringify(savedMovie));
};

export { addLocalStorageQueue, addLocalStorageWached };