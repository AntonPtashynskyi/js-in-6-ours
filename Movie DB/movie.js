import { fetchSearchMovies, fetchPopularMovies } from './components/fetchMovie';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.container-body');
const paginationButton = document.querySelector('.pagination-container-button');
const firstPageBtn = document.getElementById('fist-page-btn');
const lastPageBtn = document.getElementById('last-page-btn');

searchForm.addEventListener('submit', onSubmitForm);
paginationButton.addEventListener('click', onPaginationButtonClick);
firstPageBtn.addEventListener('click', onFirstPageBtnClick);
lastPageBtn.addEventListener('click', onLastPageBtnClick);

let currentPage = 1;
let totalPage = 1;
let searchQuery = '';

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
  if (e.target.className !== 'pagination-button') {
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
  firstPageBtn.classList.add('hidden');

  if (currentPage > 1) {
    firstPageBtn.classList.remove('hidden');
  }
  if (currentPage === totalPage) {
    lastPageBtn.classList.add('hidden');
  }
  if (currentPage < totalPage) {
    lastPageBtn.classList.remove('hidden');
  }

  const array = createArrayOfNumbers(currentPage);
  const markup = array
    .map((item) => {
      if (item === currentPage) {
        return `<button class="pagination-button is-active" id="pagination" name="pagin" >${item}</button>`;
      }

      return `<button class="pagination-button" id="pagination">${item}</button>`;
    })
    .join('');

  paginationButton.innerHTML = '';
  paginationButton.insertAdjacentHTML('beforeend', markup);
  // window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createArrayOfNumbers(currentPage) {
  const arrayOfNumbers = [];
  if (currentPage === 1) {
    for (let i = 1; i <= 3; i += 1) {
      arrayOfNumbers.push(i);
    }
  }

  if (currentPage === totalPage) {
    for (let i = currentPage; i > totalPage - 3; i -= 1) {
      arrayOfNumbers.push(i);
    }
    return arrayOfNumbers.reverse();
  } else if (currentPage > 1) {
    arrayOfNumbers.push(currentPage - 1, currentPage, currentPage + 1);
  }
  return arrayOfNumbers;
}

function renderFilms(films) {
  const markup = films.results
    .map(({ title, vote_average, poster_path }) => {
      const trimmedString = title.substring(0, 45);

      return ` <div class="film-card">
       <a href="#" class="film-card__link">
         <img
           class="film-card__image"
           src="https://image.tmdb.org/t/p/w500${poster_path}"
           alt="alt "
         />
       </a>
       <div class="film-card__description">
         <p class="film-card__text">${trimmedString}</p>
         <p class="film-card__text film-rating">${vote_average}</p>
       </div>
     </div>`;
    })
    .join('');
  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('beforeend', markup);
}
