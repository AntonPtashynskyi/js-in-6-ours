const BASE_LINK = '';
const API_KEY = '';

export default class Fetch {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchFilms() {
    const response = await fetch();

    this.page += 1;

    return await response.json();
  }

  resetPage() {
    this.page = 1;
  }

  setSearchQuery(inputtedValue) {
    this.searchQuery = inputtedValue;
  }

  resetSearchQuery() {
    this.searchQuery = '';
  }
}
