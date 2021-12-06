// console.log('start');
// let count = 0;

// const timer = setInterval(() => {
//   count += 1;
//   console.log(count);
// }, 1000)
// console.log('finish');

// const stop = () => {
//   clearInterval(timer);
// };

// setTimeout(() => {
//   stop();
// }, 5000);
// ------------------------------------------------
// const randomNumber = Math.floor(Math.random() * 100);

// const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (randomNumber > 50) {
//       resolve('Good');
//     } else {
//       reject('Bad');
//     }
//   }, 1000);
// });

// console.log(result);

// result.then(console.log).catch((error) => {
//   console.log(error);
// });
// ---------------------------------

// const fetcher = (page) => {
//   return new Promise((resolve, reject) => {
//     if (typeof page === 'number') {
//       resolve(fetch(`https://swapi.dev/api/films/${page}/`));
//     } else {
//       reject('Bad news');
//     }
//   });
// };

// fetcher(2)
//   .then((data) => data.json())
//   .then((response) => console.log(response.created))
//   .catch(console.error);
