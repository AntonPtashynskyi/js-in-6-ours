// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click', (event) => {
//   console.log('Target Button is activated');
//   console.log(event);
//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', (event) => {
//   console.log('Target Button is deactivated');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log('Click on target button');
// }
// ======================================================================
// const formEl = document.querySelector('.js-register-form');

// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   console.log(formData);
//   formData.forEach((value, name) => {
//     console.log(value);
//     console.log(name);
//   });
//   // const formElements = event.currentTarget.elements;
//   // console.log(formElements);

//   // const mail = formElements.email.value;
//   // const password = formElements.password.value;
//   // console.log(mail, password);
// }
// ======================================================================

// const inputEl = document.querySelector('.js-input');
// const licenseEl = document.querySelector('.js-license');
// const submitBtn = document.querySelector('.js-button');
// const nameLabel = document.querySelector('.js-button > span');

// const refs = {
//   inputEl: document.querySelector('.js-input'),
//   licenseCheckbox: document.querySelector('.js-license'),
//   submitBtn: document.querySelector('.js-button'),
//   nameLabel: document.querySelector('.js-button > span'),
// };

// // refs.inputEl.addEventListener('focus', onInputFocus);
// // refs.inputEl.addEventListener('blur', onInputBlur);
// // refs.inputEl.addEventListener('change', onInputChange);
// // refs.inputEl.addEventListener('input', onInputChange); // use for enter the text !!!

// refs.inputEl.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//   console.log('Get focused');
// }

// function onInputBlur() {
//   console.log('Lost focus');
// }

// function onInputChange(event) {
//   // console.log(event.currentTarget.value);
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   // console.log(event.currentTarget.checked);
//   console.log(refs.submitBtn.disabled);
//   refs.submitBtn.disabled = !event.currentTarget.checked;
// }
// ======================================================================
// window.addEventListener('keydown', onKeyDown);
// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear-btn'),
// };

// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeyDown(event) {
//   // console.log(event);
//   // console.log('event key', event.key);

//   refs.output.textContent += event.key;
// }

// function onClearOutput(event) {
//   refs.output.textContent = '';
// }
// ======================================================================
// letterCount('Maggy', 'g');
// letterCount('Barry', 'b');
// letterCount('', 'z');

// const findCountOfLatter = (name, letter) =>
//   name
//     .toLowerCase()
//     .split('')
//     .reduce((acc, value) => (value === letter ? acc + 1 : acc), 0);

// console.log(findCountOfLatter('Maggy', 'g'));
// console.log(findCountOfLatter('Barry', 'b'));
// console.log(findCountOfLatter('',  'z'));

// ======================================================================

// countPoints(['3:1', '0:0', '0:1', '2:1', '0:1']); // 7

// const countPoints = (array) =>
//   array
//     .map((element) =>
//       element[0] === element[2] ? 1 : element[0] > element[2] ? 3 : 0
//     )
//     .reduce((acc, number) => (acc += number));

// const countPoints = (array) =>
//   array.reduce(
//     (acc, number) =>
//       number[0] === number[2] ? acc + 1 : number[0] > number[2] ? acc + 3 : acc,
//     0
//   );

// const countPoints = (array) =>
//   array.filter((element) => element[0] > element[2]).length * 3 +
//   array.filter((element) => element[0] === element[2]).length * 1;

// console.log(countPoints(['3:1', '0:0', '0:1', '2:1', '0:1']));
// ======================================================================
// =============================================================

// getSum([1, 2, 3, 4, 5]); // [1, 3, 6, 10, 15];

// const sum = (array) => {
//   array.reduce((acc, element, index) => {
//     if (index > 0) {
//     } else {
//       return [element];
//     }
//   });
// };

// const sum = (acc, number, index) => {
//   if (index > 0) {
//     // [...acc, number];
//     number +
//   } else {
//     [number];
//   }
// };
// console.log(sum([1, 2, 3, 4, 5]));

// const sum = (array) => {
//   let sum = 0;
//   return array.map((value) => (sum += value));
// };

// console.log(sum([1, 2, 3, 4, 5]));
// =============================================================
// =============================================================

// const sum = (array) =>
//   array.reduce(
//     (acc, number, index) => (
//       acc.push(index ? number + acc[index - 1] : number), acc
//     ),
//     []
//   );

// console.log(sum([1, 2, 3, 4, 5]));
// =============================================================
// =============================================================
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onContainerClick);

// function onContainerClick(e) {
//   if (e.targe.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.is-active');
//   // console.log(currentActiveBtn);

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('is-active');
//   }

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('is-active');
//   // console.log(e.target);
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }
// ===================================== other example ===========================
// const selectedTags = new Set();

// function onContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const tag = e.target.dataset.value;
//   const isActive = e.target.classList.contains('is-active');

//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   e.target.classList.toggle('is-active');
//   console.log(selectedTags);
// }
// ===================================== other example ===========================
// const tech = [
//   { label: 'HTML' },
//   { label: 'CSS' },
//   { label: 'JavaScript' },
//   { label: 'Node.js' },
//   { label: 'React' },
//   { label: 'Vue' },
//   { label: 'Next.js' },
//   { label: 'Mobx' },
//   { label: 'Redux' },
//   { label: 'GraphQL' },
//   { label: 'MongoDB' },
// ];

// const input = document.querySelector('#filter');
// const output = document.querySelector('.js-list');

// const inputEl = document.addEventListener('input', onFilterChange);
// const createMarkup = createTechMarkup(tech);

// function createTechMarkup(array) {
//   return array.map((el) => `<li>${el.label}</li>`).join('');
// }

// populateList(createMarkup);

// function onFilterChange(evt) {
//   const filter = evt.target.value.toLowerCase();

//   const filteredValue = tech.filter((item) =>
//     item.label.toLocaleLowerCase().includes(filter)
//   );

//   const listItemMarkup = createTechMarkup(filteredValue);

//   populateList(listItemMarkup);
// }

// function populateList(markup) {
//   output.innerHTML = markup;
// }
// ===================================== other example ===========================
// const container = document.querySelector('.div');
// const btnEl = document.querySelector('.btn');

// btnEl.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   container.classList.toggle('alert');

//   container.innerHTML = `
//   <div class="container__alert">
//   <p>Hello my name is Anton</p>
//   </div>
//   `;

//   setTimeout(() => container.classList.remove('alert'), 1000);
//   setTimeout(() => (container.textContent = ''), 1000);

//   if (container.classList.contains('alert')) {
//     return;
//   } else {
//     container.innerHTML = '';
//   }
// }
// ======================================================
