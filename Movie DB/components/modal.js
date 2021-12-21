import { fetchMovieById } from './fetchMovie';

const containerBody = document.querySelector('.container-body');

containerBody.addEventListener('click', getMovieIDByClick);

function getMovieIDByClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  let movieID = Number(e.target.id);
  fetchMovieById(movieID);
}
