import {genresID} from './genresID.js'
import { setPopularMovie} from "./topMovies.js";
import { indexError,gal,imgURL,imgPlaceholder,spinner, timeout} from './utils.js';
indexError.style.display = "none";
async function fetchMovies(name) {
    try {
      await spinner.removeAttribute('hidden')
      await timeout(500)
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=837f028f22fd2591f3672c74a92683e2&language=en-US&query=${name}&page=1&include_adult=false`,
      );
      await spinner.setAttribute('hidden', '');
      if (!response.ok) {
        throw new Error(response.status);
      }
      return await response.json();
    } catch (err) {
      setPopularMovie();
      return console.log(err);
    }};
  export async function eventHandler(event) {
    event.preventDefault();
    let name = await event.currentTarget.elements.searchQuery.value;
    try { let data = await fetchMovies(name);
    let movies = data.results;
        if (movies.length > 0) {
          renderMovies(movies);
          indexError.style.display = "none";
        }
        else {setPopularMovie();
          indexError.style.display = "block";}}
          catch (err) {
            return console.log(err);
          }};
  function renderMovies(movies) {
    let markup = "";
     for (const {id,poster_path, original_title, genre_ids, release_date} of movies) {
       
       let genre = genresID.filter(genre=>genre_ids.includes(genre.id)).map(genre=>genre.name).slice(0,3).join(", ");
       let date = release_date.split("-");
       let year = date[0];
        if(poster_path == null){;
          markup+=`
        <div>
         <img class="gallery__image" id="${id}" src="${imgPlaceholder}" alt="plakat" />
         <h3 class="gallery__title">${original_title}</h3>
         <div class="gallery__decr"><p class="gallery__genre">${genre}</p><p class="gallery__date">${year}</p></div>
        </div>`}
        else {markup+=`
        <div>
         <img class="gallery__image" id="${id}" src="${imgURL}${poster_path}" alt="plakat" />
         <h3 class="gallery__title">${original_title}</h3>
         <div class="gallery__decr"><p class="gallery__genre">${genre}</p><p class="gallery__date">${year}</p></div>
        </div>`}
       };
       gal.insertAdjacentHTML("beforeend", markup);
   };