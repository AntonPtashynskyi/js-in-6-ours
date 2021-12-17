import Fetch from './fetchMovie';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.query.value;
}
