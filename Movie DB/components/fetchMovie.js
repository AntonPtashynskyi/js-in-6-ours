const BASE_LINK = 'https://api.themoviedb.org/3/';
const API_KEY = '2a16c6401fc5b60e749d1dab2b58b588';

export async function fetchSearchMovies(searchQuery, page = 1) {
  const response = await fetch(
    `${BASE_LINK}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
  );
  return await response.json();
}

export async function fetchPopularMovies(page = 1) {
  const response = await fetch(
    `${BASE_LINK}trending/movie/day?api_key=${API_KEY}&page=${page}`
  );

  return await response.json();
}
