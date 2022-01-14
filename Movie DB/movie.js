import { fetchSearchMovies, fetchPopularMovies } from "./components/fetchMovie";
import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";

const searchForm = document.querySelector(".search-form");
const gallery = document.querySelector(".container-body");
const paginationButton = document.querySelector(".pagination-container-button");
const firstPageBtn = document.getElementById("fist-page-btn");
const lastPageBtn = document.getElementById("last-page-btn");
const container = document.getElementById("pagination");

searchForm.addEventListener("submit", onSubmitForm);
// paginationButton.addEventListener('click', onPaginationButtonClick);
// firstPageBtn.addEventListener("click", onFirstPageBtnClick);
// lastPageBtn.addEventListener("click", onLastPageBtnClick);

const pagination = new Pagination(container, {
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  totalItems: 500, //                        Value to change
  // firstItemClassName: "tui-first-child",
  // lastItemClassName: "tui-last-child",
});

pagination.on("afterMove", async ({ page }) => {
  // call API (Fetch: page, total_results)
  const films = await fetchPopularMovies(page);
  renderFilms(films);
});

let currentPage = 1;
let totalPage = 1;
let searchQuery = "";

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

  renderFilms(films);
  currentPage = films.page;
  totalPage = films.total_pages;
  renderPagination();
}

function onLastPageBtnClick() {
  currentPage = totalPage;
  fetchMovies();
}

function onFirstPageBtnClick() {
  currentPage = 1;
  fetchMovies();
}

function onPaginationButtonClick(e) {
  if (e.target.className !== "pagination-button") {
    // isNaN
    return;
  }
  currentPage = Number(e.target.textContent);

  fetchMovies();
  renderPagination();
}

function onSubmitForm(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.elements.query.value;
  currentPage = 1;
  renderPagination();
  fetchMovies();
}

function renderPagination() {
  // displayAdditionalPaginationBtn();
  const array = createArrayOfNumbers(currentPage, totalPage);

  const markup = array
    .map((item) => {
      if (item === currentPage) {
        return `<button class="pagination-button is-active" id="pagination" name="pagin" >${item}</button>`;
      }

      return `<button class="pagination-button" id="pagination">${item}</button>`;
    })
    .join("");

  // paginationButton.innerHTML = "";
  // paginationButton.insertAdjacentHTML("beforeend", markup);
  // window.scrollTo({ top: 0, behavior: 'smooth' });
}

// function displayAdditionalPaginationBtn() {
//   if (currentPage === 1 && totalPage === 0) {
//     firstPageBtn.classList.add("hidden");
//     lastPageBtn.classList.add("hidden");
//     showEmptyResult();
//   }
//   if (currentPage === 1) {
//     firstPageBtn.classList.add("hidden");
//   } else if (currentPage && totalPage === 1) {
//     firstPageBtn.classList.add("hidden");
//     lastPageBtn.classList.add("hidden");
//   }

//   if (currentPage > 1) {
//     firstPageBtn.classList.remove("hidden");
//   }
//   if (currentPage === totalPage) {
//     lastPageBtn.classList.add("hidden");
//   }
//   if (currentPage < totalPage) {
//     lastPageBtn.classList.remove("hidden");
//   }
// }

function createArrayOfNumbers(start, end) {
  let arrayOfNumbers = [];

  if (start === 1 && end === 0) {
    return arrayOfNumbers;
  }

  if (start === 2 && end === 2) {
    for (let i = 1; i <= 2; i += 1) {
      arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
  }

  if (start === 1 && end === 1) {
    return arrayOfNumbers.push(1);
  }

  if (start === 1 && end === 2) {
    for (let i = 1; i <= 2; i += 1) {
      arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
  }

  if (start === 1) {
    for (let i = 1; i <= 3; i += 1) {
      arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
  }

  if (end === 0) {
    return (arrayOfNumbers = []);
  }

  if (start === totalPage) {
    for (let i = start; i > end - 3; i -= 1) {
      arrayOfNumbers.push(i);
    }
    return arrayOfNumbers.reverse();
  } else if (start > 1) {
    arrayOfNumbers.push(start - 1, start, start + 1);
  }

  return arrayOfNumbers;
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
