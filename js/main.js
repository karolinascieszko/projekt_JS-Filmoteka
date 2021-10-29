import { setPopularMovie} from "./topMovies.js";
import { eventHandler} from "./fetchsearch.js";
import { searchForm, gal, openModalBtn,closeModalBtn,modal} from "./utils.js";
import {toggleModal, escape, selectId, fetchMovies, renderModal} from "./modalLibrary.js"
setPopularMovie()
searchForm.addEventListener('submit', eventHandler);
searchForm.addEventListener("input", ()=>{
  while(gal.firstChild){gal.firstChild.remove()}
 });

 
openModalBtn.addEventListener("click", async (event)=>{
  let id = await selectId(event);
  let movie = await fetchMovies(id);
  renderModal (movie);
  toggleModal()
});
closeModalBtn.addEventListener("click", toggleModal());
modal.addEventListener("click", escape);