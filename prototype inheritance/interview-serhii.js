// let num = "33123212399999999912312356664544232223423266677";

// function findLuckyNum(num) {
//   num = [...num];

//   let res = {};

//   for (let i = 0; i < num.length; i += 1) {
//     if (res[num[i]]) {
//       res[num[i]] += 1;
//     } else {
//       res[num[i]] = 1;
//     }
//   }

//   let result = 0;
//   console.log(res);

//   for (let key in res) {
//     if (res[key] == key) {
//       console.log(result, key);
//       result = Math.max(result, key);
//     }
//   }
//   return result;
// }

// console.log(findLuckyNum(num));
// ======================================
// const user = {};

// user.name = "Anton";
// user.sureName = "Ptashynskyi";
// user.name = "Pete";
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }

//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// ======================================

// function sumSalaries(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }

//   return sum;
// }

// console.log(sumSalaries(salaries));
// ======================================

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     let a = obj[key];
//     if (typeof a == "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);
// ======================================

import Up from "./prototype";

const string = "Hello world";

console.log(Up);
