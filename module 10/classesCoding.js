import NewsApiService from './api-service.js';

const searchForm = document.querySelector('.search-form');
const loadMore = document.querySelector('[data-action="load-more"]');
const container = document.querySelector('.articles');

const newsApiService = new NewsApiService();

searchForm.addEventListener('submit', onSearch);
loadMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value; // получает доступ к методу класса set query и в конструктор класса записывает свойство query.
  newsApiService.resetPage();
  newsApiService.fetchArticles().then((articles) => {
    clearArticlesContainer();
    renderArticles(articles);
  });
}

function onLoadMore() {
  newsApiService.fetchArticles().then(renderArticles);
}

function renderArticles(articles) {
  container.insertAdjacentHTML('beforeend', markup(articles));
}

function markup(articles) {
  return articles
    .map(
      ({ author, description, urlToImage, title, url }) =>
        ` <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${urlToImage}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    )
    .join('');
}

function clearArticlesContainer() {
  container.innerHTML = '';
}
