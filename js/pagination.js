import { totalPages, setPopularMovie,setSearchMovie, name} from "./renderMovies.js";
import { paginationBox, gal} from './utils.js'
export let page = 1;
export function setPage(value) {
  page = value;
}
export function renderPagination() {
  if (page <= 1) {
    for (let i = page; i < totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        paginationBox.innerHTML = `
        <li class="page-item disabled page-item-previous">
          <a class="page-link" href="#" tabindex="-1">
            <svg class="page-icon" width="16" height="16">
              <use href="./images/arrows.svg#icon-arrow-left"></use>
            </svg>
          </a>
        </li>        
        <li class="page-item active" data=1>
          <a class="page-link" href="#">1<span class="sr-only">(current)</span></a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">${page + 1}</a>      
        </li>
        <li class="page-item" data=${page + 2}>
          <a class="page-link" href="#">${page + 2}</a>      
        </li>
        <li class="page-item" data=${page + 3}>
          <a class="page-link" href="#">${page + 3}</a>      
        </li>
        <li class="page-item" data=${page + 4}>
          <a class="page-link" href="#">${page + 4}</a>      
        </li>
        <li class="page-item disabled hide">
          <a class="page-link" href="#">...</a>      
        </li>
        <li class="page-item hide" data=${totalPages}>
          <a class="page-link" href="#">${totalPages}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">
            <svg class="page-icon" width="16" height="16">
                <use href="./images/arrows.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
        `;
      }
    }
  } 
  else {
    for (let i = page; i < totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        paginationBox.innerHTML = `
        <li class="page-item page-item-previous" data=${page - 1}>
          <a class="page-link" href="#" tabindex="-1">
            <svg class="page-icon" width="16" height="16">
              <use href="./images/arrows.svg#icon-arrow-left"></use>
            </svg>
          </a>
        </li>
        <li class="page-item hide" data=1>
          <a class="page-link" href="#">1<span class="sr-only">(current)</span></a>      
        </li>
        <li class="page-item disabled hide">
          <a class="page-link" href="#">...</a>      
        </li>
        <li class="page-item" data=${page - 2}>
          <a class="page-link" href="#">${
            page - 2
          }<span class="sr-only">(current)</span></a>      
        </li>
        <li class="page-item" data=${page - 1}>
          <a class="page-link" href="#">${page + -1}</a>      
        </li>
        <li class="page-item active" data=${page}>
          <a class="page-link" href="#">${page}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">${page + 1}</a>      
        </li>
        <li class="page-item" data=${page + 2}>
          <a class="page-link" href="#">${page + 2}</a>      
        </li>
        <li class="page-item hide disabled">
          <a class="page-link" href="#">...</a>      
        </li>
        <li class="page-item hide" data=${totalPages}>
          <a class="page-link" href="#">${totalPages}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">
            <svg class="page-icon" width="16" height="16">
              <use href="./images/arrows.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
        `;
      }
    }
  }
}
let currentPageNr = 0;
export const nextPage = (e) => {
  while(gal.firstChild){gal.firstChild.remove()}
  currentPageNr = e.target.closest("li");
  page = parseInt(currentPageNr.getAttribute("data"));
  if (name == "") {
    setPopularMovie();
  }
  else setSearchMovie();
};
export function pageOne(){
  page = 1
}