import { setPopularMovie} from "./topMovies.js";
import { eventHandler, qs} from "./fetchsearch.js";
const searchForm = qs('#search-form');
const gal = qs('.gallery');
setPopularMovie()

searchForm.addEventListener('submit', eventHandler);
searchForm.addEventListener("input", ()=>{
  while(gal.firstChild){gal.firstChild.remove()}
 })

const movie = {"adult":false,"backdrop_path":"/gOglaWhGx246MvzpnYMZ7HiBkiK.jpg","belongs_to_collection":{"id":726871,"name":"Dune Collection","poster_path":"/wKNYdj5Wm2XamEQcpyikGWpTOPJ.jpg","backdrop_path":"/iCFFmXkK5FdIzqZyyQQEdpkTo8C.jpg"},"budget":165000000,"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":18,"name":"Drama"},{"id":878,"name":"Science Fiction"}],"homepage":"https://www.dunemovie.com/","id":438631,"imdb_id":"tt1160419","original_language":"en","original_title":"Dune","overview":"Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.","popularity":2780.144,"poster_path":"/d5NXSklXo0qyIYkgV94XAgMIckC.jpg","production_companies":[{"id":174,"logo_path":"/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png","name":"Warner Bros. Pictures","origin_country":"US"},{"id":923,"logo_path":"/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png","name":"Legendary Pictures","origin_country":"US"},{"id":120830,"logo_path":null,"name":"Villeneuve Films","origin_country":"CA"}],"production_countries":[{"iso_3166_1":"CA","name":"Canada"},{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2021-09-15","revenue":129700000,"runtime":155,"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","tagline":"Beyond fear, destiny awaits.","title":"Dune","video":false,"vote_average":8.1,"vote_count":1884};
const moddal = document.querySelector('.moddal');
let markupSec = ""

const{poster_path, genres, vote_average, vote_count, popularity, original_title, overview} = movie;

const imgURL="https://image.tmdb.org/t/p/w300"

let gen = genres.map(genre => genre.name).join(", ")
markupSec=`<div class="moddal__window">
<button class="moddal__close" data-modal-close><img  width="20px" src="./images/closeIcon.svg"/></button>
<div class="moddal__grid">
<img class="moddal__poster" src="${imgURL}${poster_path}" alt="plakat" />
<div>
<h1 class="moddal__title">${original_title}</h1>
<div class="moddal__data"><p class="moddal__dataTitle moddal__data--1">Vote / Votes</p><div class="moddal__data"><p class="moddal__dataTxt moddal__voteA">${vote_average}</p>/<p class="moddal__dataTxt moddal__voteC">${vote_count}</p></div></div>
<div class="moddal__data"><p class="moddal__dataTitle moddal__data--2">Popularity</p><p class="moddal__dataTxt">${popularity}</p></div>
<div class="moddal__data"><p class="moddal__dataTitle moddal__data--3">Original Title</p><p class="moddal__dataTxt">${original_title}</p></div>
<div class="moddal__data"><p class="moddal__dataTitle moddal__data--4">Genre</p><p class="moddal__dataTxt">${gen}</p></div>
<h2 class="moddal__about">ABOUT</h2>
<h3 class="moddal__aboutTxt">${overview}</h3>
<div class="moddal__buttons"><button class="moddal__btn">add to Watched</button><button class="moddal__btn">add to queue</button></div>
</div></div></div>
`
moddal.insertAdjacentHTML("beforeend", markupSec);
