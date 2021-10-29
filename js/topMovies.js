import { gal, imgURL } from './utils.js';
import{genresID} from './genresID.js'
let markup="";
let page = 1;
async function topMovie(page) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=837f028f22fd2591f3672c74a92683e2&page=${page}`
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
 let movie = movies.results
  for (const {id,poster_path, original_title, genre_ids, release_date} of movie) {
    let genre = genresID.filter(genre=>genre_ids.includes(genre.id)).map(genre=>genre.name).slice(0,3).join(", ");
    let date = release_date.split("-");
    let year = date[0];
     markup+=`
     <div>
      <img class="gallery__image" id="${id}" src="${imgURL}${poster_path}" alt="plakat" />
      <h3 class="gallery__title">${original_title}</h3>
      <div class="gallery__decr"><p class="gallery__genre">${genre}</p><p class="gallery__date">${year}</p></div>
     </div>`
    };
    gal.insertAdjacentHTML("beforeend", markup);
}
export async function setPopularMovie() {
  let movies = await topMovie(page);
  renderMovies(movies) }

