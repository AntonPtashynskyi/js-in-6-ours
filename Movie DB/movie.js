import { fetchSearchMovies, fetchPopularMovies } from "./components/fetchMovie";
import Pagination from "tui-pagination";

const searchForm = document.querySelector(".search-form");
const gallery = document.querySelector(".container-body");
const container = document.getElementById("pagination");

searchForm.addEventListener("submit", onSubmitForm);

const options = {
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  totalItems: 500, //                        Value to change
  firstItemClassName: "tui-first-child-btn",
  lastItemClassName: "tui-last-child-btn",
};
const pagination = new Pagination(container, options);

let currentPage = 1;
let totalPage = 1;
let searchQuery = "";

pagination.on("afterMove", async ({ page }) => {
  const films = await fetchMovies(page);
});

try {
  fetchMovies();
} catch (error) {
  console.log(error);
}

async function fetchMovies() {
  let films = {};

  if (searchQuery) {
    films = await fetchSearchMovies(searchQuery, currentPage);
  } else {
    films = await fetchPopularMovies(currentPage);
  }
  pagination.setTotalItems(films.total_results);

  renderFilms(films);
}

function onSubmitForm(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.elements.query.value;
  pagination.movePageTo(1);

  currentPage = 1;

  fetchMovies();
}

function renderFilms(films) {
  const markup = films.results
    .map(({ title, vote_average, poster_path, id }) => {
      const trimmedString = title.substring(0, 35);

      return `     <div class="film-card" data-card="card">
      
        <a href="#" class="film-card__link">
          <img
            class="film-card__image"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
            alt="${title} "
            id="${id}"
          />
           <div class="film-card__description">
        <p class="film-card__text">${trimmedString}</p>
        <span class="film-card__text film-rating">${vote_average}</span>
      </div>
        </a>
      
     
    </div>`;
    })
    .join("");
  gallery.innerHTML = "";
  gallery.insertAdjacentHTML("beforeend", markup);
}

function showEmptyResult() {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<p class="bad-search-result">Sorry, we don't find nothing!</p>`
  );
}
