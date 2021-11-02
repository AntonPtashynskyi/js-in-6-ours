// const add = function (x, y) {

//   console.log(x);
//   console.log(y);

//   const result = x + y;
//   // console.log('result:', result);

//   return result;
  
// }

// const r1 = add(3, 20);
// console.log('r1: ', r1);


// const fn = function () {
//   // return 33; все что ниже, не будет выполнятся. Выходит с функции.

//   console.log(1);
//   console.log(2);
//   console.log(3);
  
// }

// console.log(fn());
// =========================
// const card = [4, 55, 43, 2, 34, 5, 6, 44, 3];

// const calculateTotalPrice = function (items) {
//   console.log(items);

//   let total = 0;

//   for (const item of items) {
//     total += item;

//   }
//   return total;
// }

// console.log(calculateTotalPrice(card));
//===========================

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }

// logItems(['Mango', 'Anton', 'Nina'])
//===================

// const logins = ['Mango', 'Anton', 'Nina'];

// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {
//     if (login === loginToFind) {  
//       return `We found users ${loginToFind}.`; 
//     } 
//   }
   
//   return `Can't find user ${loginToFind}`;
// }


// const findLogin = function (allLogins, loginToFind) {
  
// return allLogins.includes(loginToFind) ? `We found use r ${loginToFind}.` : `Can't find user ${loginToFind}`;

// }

// console.log(findLogin(logins, 'Anton'));
// console.log(findLogin(logins, 'Nina'));
// console.log(findLogin(logins, 'Kiwi'));
// ==================

// SMALLEST NUMBER  
// const numbers = [1, 4, 5, 66, 4, 33, 21, 123, -3, 66, 63];

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
  
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// }

// console.log(findSmallestNumber(numbers));

// =====================
//INVERTED STRING 

// const string = 'qsJQIjsniqwiQi';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//   const isInLowerCase = letter === letter.toLowerCase();

//   invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();

// }

// console.log(invertedString);

//====== how make in function same case

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

// for (const letter of letters) {
//   const isInLowerCase = letter === letter.toLowerCase();
//     invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//   }
  
//   return invertedString;
  
// }

// console.log(changeCase('qsJQIjsniqwiQi'));

// =============================

//SLUGIFY (STRING)
// const title = 'A current mobile number helps you reset your password easily and receive SMS notifications.';

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);
//================

//ARGS ==============

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// }

// console.log(add(1,23,4,5));

//========================

// const filterNumbers = function (array, ...args) { 
//   console.log('array', array);
//   console.log('args', args);
//   const uniqueArray = [];

//   for (const number of array) {
//     if (args.includes(number)) {
//       uniqueArray.push(number);
      
//       console.log(`${number} got it!`);
//     }
//   }
//   return uniqueArray;
// }


// console.log(filterNumbers([1, 3, 4, 52, 1, 3], 5, 1, 2, 4, 2, 5, 124, 65, 6, 8));

// Exercise 9
// function getExtremeElements(array) {
  
//   return [array[0], array[array.length - 1]];

// }


// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// Exercise 10================

// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(`${delimeter}`);

//   return words;
// }

// console.log(splitMessage("Рекомендуем проверить правильность кода в Visual Studio Code с помощью плагина ESlint", "_"));

// Exercise 11===============

// function calculateEngravingPrice(message, pricePerWord) {
  
//   const words = message.split(" ");

//   return pricePerWord * words.length;
  
// }

// console.log(calculateEngravingPrice('The quick brown fox jumps over the lazy dog.', 10));


// Exercise 13 ===================
// function slugify(title) {
//   let textNormalized;

//   textNormalized = title.toLowerCase().split(' ').join('-');

//   return textNormalized;

// }
// console.log(slugify("Arrays for begginers"));

// Exercise 16 

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let newArray;
  
//   newArray = firstArray.concat(secondArray);

  

//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//  }
//   return newArray;
//     // Change code above this line
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));