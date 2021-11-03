// add movies to local storage
const addLocalStorage = (key, data) => {
  let savedMovie = localStorage.getItem(key);
  savedMovie = savedMovie ? JSON.parse(savedMovie) : [];
  // add new movie
  savedMovie.push(data);
  localStorage.setItem(key, JSON.stringify(savedMovie));
};

export { addLocalStorage };