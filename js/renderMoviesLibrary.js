import { watchedMovie, queueMovie } from "./utils.js";
import {
  gal,
  imgURL,
  timeout,
  indexError,
  imgPlaceholder,
} from "./utils.js";

//Get data from LocalStorage
const storage = (key) => {
    const memory = localStorage.getItem(key);
    try {
        const saved = JSON.parse(memory);
        return saved;
    } catch (error) {
        console.log(error.message);
    }
};


//Render movie after clicking
watchedMovie.addEventListener("click", render("watchedLocalStorage"));
queueMovie.addEventListener("click", render("queueLocalStorage"));


//fetch movies
async function fetchMovies(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=837f028f22fd2591f3672c74a92683e2&language=en-US`,
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (err) {
    return console.log(err);
    }
};
  
function renderMovies(movies) {
  let markup = "";
    const {
        id,
        poster_path,
        original_title,
        genre_ids,
        release_date,
        genres,
    } = movies;
    let genre = genres.map(genre => genre.name).join(", ")
    let date = release_date?.split("-") ?? "";
    let year = date[0];
    if (poster_path == null) {
      markup += `
        <div>
         <img class="gallery__image" id="${id}" src="${imgPlaceholder}" alt="plakat" />
         <h3 class="gallery__title">${original_title}</h3>
         <div class="gallery__decr"><p class="gallery__genre">${genre}</p><p class="gallery__date">${year}</p></div>
        </div>`;
    } else {
      markup += `
        <div>
         <img class="gallery__image" id="${id}" src="${imgURL}${poster_path}" alt="plakat" />
         <h3 class="gallery__title">${original_title}</h3>
         <div class="gallery__decr"><p class="gallery__genre">${genre}</p><p class="gallery__date">${year}</p></div>
        </div>`;
    }
  
  gal.insertAdjacentHTML("beforeend", markup);
}

//main function
async function render(key) {
    const saved = storage(key);
    for (const i of saved) {
        const movie = await fetchMovies(i);
        console.log(movie);
        renderMovies(movie);
    }
}