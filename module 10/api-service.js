export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles(q) {
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`;
    const options = {
      headers: {
        Authorization: 'b29d46388ca946e8ba8f7c84607dbf2d',
      },
    };

    return fetch(url, options)
      .then((response) => response.json())
      .then(({ articles }) => {
        this.page += 1;

        return articles;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
