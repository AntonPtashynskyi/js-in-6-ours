import articles from "./articles.js";

// const concatTitle = function (author, name) {
//   return `${author} ${name}`
// }

// for (const article of articles) {
//   // const { description, author: articleOwner } = article;
//   // console.log(description);
//   // const author = "Anton";
//   const {author,  source: {name, id}, } = article;
//   const transformTitle = concatTitle(author, name)

//   console.log(transformTitle);
// }

// const userInfo = {
//   name: "Bob",
//   hobbies: ["read", "Swim", "run",],
// };

// Быстрый выход с функции
// const foo = function (info) {
  // if (!info.hobbies) return; // !!!!!!!
//   // for (let i = 0; i < userInfo.hobbies.length; i++) {
//   //   const element = userInfo.hobbies[i];

//   //   console.log(element);
//   // }
//   for (const hobby o f info.hobbies) {
//     console.log(hobby);
//   }
// };

// foo(userInfo);


// Spread
// const a = { num: 444 };
// const b = { str: "hello" };

// const c = { ...a, ...b };

// console.log(c);
// =========================================================
// const foo = function (str, ...all) {
//   console.log(str);
//   console.log(all);
// }

// foo("string", 3343, { num: 44 }, [11, 434, 32, 3]);
// =========================================================


// const article = articles[0];

// const { author, source: { id, name}, lastName = 'null', } = articles[0];

// console.log(author, id, name, lastName);

