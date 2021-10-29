import{genresID} from './genresID.js'
import { setPopularMovie} from "./topMovies.js";
export const qs = (selector) => document.querySelector(selector);
const indexError = qs(".headerIndex__error");
const gal = qs('.gallery');
indexError.style.display = "none";
const imgURL="https://image.tmdb.org/t/p/w500";
async function fetchMovies(name) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=837f028f22fd2591f3672c74a92683e2&language=en-US&query=${name}&page=1&include_adult=false`,
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return await response.json();
    } catch (err) {
      setPopularMovie();
      return console.log(err);
    }
  };
  export async function eventHandler(event) {
    event.preventDefault();
    let name = await event.currentTarget.elements.searchQuery.value;
    try { let data = await fetchMovies(name);
    let movies = data.results;
    console.log(movies)
    
        if (movies.length > 0) {
          renderMovies(movies);
          indexError.style.display = "none";
        }
        else {setPopularMovie();
          indexError.style.display = "block";}}
          catch (err) {
            return console.log(err);
          }
  }
  function renderMovies(movies) {
    let markup = "";
     for (const {id,poster_path, original_title, genre_ids, release_date} of movies) {
       
       let genre = genresID.filter(genre=>genre_ids.includes(genre.id)).map(genre=>genre.name).join(", ");
       let date = release_date.split("-");
       let year = date[0];
        if(poster_path == null){console.log(poster_path);
          markup+=`
        <div>
         <img class="gallery__image" id="${id}" src="https://coutto.net/wp-content/uploads/2021/09/500x735blank.png" alt="plakat" />
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
   }