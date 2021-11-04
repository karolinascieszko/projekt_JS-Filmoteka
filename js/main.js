import { setPopularMovie, eventHandler} from "./renderMovies.js";
import {nextPage, pageOne} from './pagination.js'
import { searchForm, gal, openModalBtn,closeModalBtn,modal, paginationBox} from "./utils.js";
import {toggleModal, escape, selectId, fetchMovies, renderModal} from "./modalLibrary.js"
setPopularMovie()
searchForm.addEventListener('submit', eventHandler);
searchForm.addEventListener("input", ()=>{
  pageOne();
  while(paginationBox.firstChild){paginationBox.firstChild.remove()}
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
paginationBox.addEventListener("click", nextPage)