// const fetcher = (url) => fetch(url); // same like string below
// {
// return new Promise((resolve) => resolve(fetch(url)));
// return Promise.resolve(fetch(url));
// }

// const fetcherPromiseA = fetcher('https://api.zippopotam.us/us/33162');
// const fetcherPromiseB = fetcher(
//   'https://api.coindesk.com/v1/bpi/currentprice.json'
// );

// fetcherPromiseA.then((res) => res.json()).then(console.log);

//  -------------- PROMISE ALL

// Promise.all([fetcherPromiseA, fetcherPromiseB])
//   .then((results) => Promise.all(results.map((result) => result.json())))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//  -------------- PROMISE RACE

// Promise.race([fetcherPromiseA, fetcherPromiseB])
//   .then((result) => result.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// ------------------>

// Practice about Classes, how to use, and how ti create webinar 26.11.2021 time: 50:00min
