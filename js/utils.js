const qs = (selector) => document.querySelector(selector);

export const indexError = qs(".headerIndex__error");
export const gal = qs('.gallery');
export const searchForm = qs('#search-form');
export const openModalBtn = qs("[data-modal-open]");
export const closeModalBtn = qs("[data-modal-close]");
export const modal = qs("[data-modal]");
export const moddalWind = qs('.moddal__grid');
export const imgURL="https://image.tmdb.org/t/p/w500";
export const imgPlaceholder="https://fireteller.com/wp-content/uploads/2020/09/Poster_Not_Available2.jpg"
