import { fetchMovieById } from "./fetchMovie";

const containerBody = document.querySelector(".container-body");

containerBody.addEventListener("click", getMovieIDByClick);

async function getMovieIDByClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  let movieID = Number(e.target.id);
  const movie = await fetchMovieById(movieID);
  console.log(movie);
}

function renderModal(params) {}
