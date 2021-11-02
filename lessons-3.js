'use strict';

// const coffeeMachine = prompt('What coffee?');
// let price = 0;
// let message = '';

// if (coffeeMachine === 'Americano') {
//   const isMilk = confirm('with milk? + 10');
//   if (isMilk === true) {
//     message = 'Thanks for the choose!';
//     price = 60;
//   } else {
//     message = 'Coffee with out milk';
//     price = 50;
//     }
// } else if (coffeeMachine === 'latte') {
//   message = 'Thanks for the choose!';
//   price = 35;
// }

// console.log(`Thanks for your order ${coffeeMachine}, please pay ${price} `);


// const coffeeMachine = prompt('What coffee?');
// let price = 0;
// let message = '';

// switch (coffeeMachine) {
//   case 'Americano':
//     message = 'Coffee with outmilk';
//     price = 50;
//     break;
  
//   case 'Latte':
//     message = 'Coffee with out milk';
//     price = 60;
//     break;

//   default:
//     message = 'You choose nothing!';
//     price = 0;
//     break;
// }
// console.log(message);


// while

// const maxValue = 10;
// let start = 0;

// // while (start < maxValue) {
// //   start += 1;
// //   console.log(start);

// // }

// for (start; start < max; start += 1 {
//   console.log(start);
//   }

// let clientCounter = 18;
// const maxClients = 30;

// while (clientCounter <= maxClients) {
//   console.log('Clients: ', clientCounter);
//   clientCounter += 1;
// }

// lessons 3-4

// const array = ["Anton", "Ina", "Max"];
// console.log(array[1]);
// console.log(array[2]);
// console.log(array.length);

// const lastArrayElement = array.length - 1
// console.log("last array element: ", array.length - 1);
// console.log(array[lastArrayElement]);

// for (let i = 0; i < array.length; i += 1){
//   console.log(array[i]);
// }

// const string = "javascript";

// for (const name of array) {
//   console.log(name);
  
// }

// for (const character of string) {
// console.log(string);  
// }

// const clients = ["Anton", "Ina", "Max"];
// const clientNameToFind = "Anton";
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Client find!"
//     break=;
//   }
//   message = "We can't find!";
// }
// console.log(message);

// clients.push("Vova");

// console.log(clients);
// for (const name of clients) {
//   console.log(name);
// }

// const roomNumber = [1, 4, 66, 666, 342, 2, 12, 4, 8, 98, 15, 23, 5, 66, 32];
// const threshold = 22;

// for (let i = 0; i < roomNumber.length; i += 1) {
//   if (roomNumber[i] < threshold) {
//     continue;
//   }
//   console.log(`Number bigger then ${threshold}: ${roomNumber[i]}`);
// }


// Arrays method 

// const someWords = "Метод split(delimeter) превращает строку в массив, «разбив» её по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.";
// console.log(someWords.split(" ")
// const clients = ["Anton", "Ina", "Max"];
// console.log(clients.indexOf("Max"));

// console.log(clients.includes("Ina"));
// console.log(clients.includes("Vova"));
// console.log(clients.includes("Vova"));

// // Множественное условие проверки
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit`);
// }

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// console.log(clients.slice(1, clients.length));


// // Method splice()
// const scores = [1, 2, 3, 4, 5];

// // const delScores = scores.splice(0, 3);
// // console.log(scores);
// // console.log(delScores);

// // scores.splice(2, 1, "hi");
// // console.log(scores);

// const allArrays = clients.concat(scores);
// console.log(allArrays);

// =============================

// const clients = ["Anton", "Ina", "Max", "Vova", "Jhon"];
// const clientToFind = "Max";

// let message= `Client ${clientToFind} not found!`;


// for (let i = 0; i < clients.length; i += 1) {
//   const client = clients[i];

//   if (client === clientToFind) {
//     message = `Client ${clientToFind} found!`;
//     break;
//   } 
// }
  // console.log(mes'age);


// for (const client of clients) {

//   if (client === clientToFind) {
//     message = `Client ${clientToFind} found!`;
//     break;
//     }
// }
  // console.log(message);

// console.log(clients.includes(clientToFind));
// const message = clients.includes(clientToFind) ? 'Yes' : 'No';
// console.log(message);



// const numbers = [44, 12, 43, 1, 3, 5, 666, 43];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// const numbers = [44, 12, 43, 1, 3, 5, 666, 43];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (biggestNumber < number) {
//     biggestNumber = number;
//   }
// }

// console.log(biggestNumber);

// const clients = ["Anton", "Ina", "Max", "Vova", "Jhon"];
// let string = '';
// for (const client of clients) {
//   string += client + ',';
// }
// string = string.slice(0, string.length -1)


// const string = clients.join(', ')
// console.log(string);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// // console.log(letters);

// for (const letter of letters) {
//   // console.log(letter);

//   // if (letter === letter.toLocaleLowerCase()) {
//   //   console.log('This letter is lowercase', letter);

//   //   invertedString += letter.toLocaleUpperCase();
//   // } else {
//   //   invertedString += letter.toLocaleLowerCase();
//   // }

//   // =====
//   invertedString += letter === letter.toLocaleLowerCase() ? letter.toUpperCase() : letter.toLocaleLowerCase();
// }

// console.log(invertedString);

// =====

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-');
// // console.log(slug);

// const slug1 = title.toLocaleLowerCase().split(' ').join('-');
// console.log(slug1);


// ===================
// const array1 = [1, 3, 5, 6, 2];
// const array2 = [1, 3, 5, 6, 2,4,56,6,5];
// let total = 0;

// const joinArray1First = array1.concat(array2);
// console.log(joinArray1First);

// for (const summa of joinArray1First) {
//   total += summa;
  
// }
// console.log(total);
// ===================

// const array = [1, 3, 5, 6, 2, 'Tony', 56, 6, 5];
// console.table(array);

// const cardToRead = 1;
// const index = array.indexOf(cardToRead);
// console.log(index);

// array.splice(index, 1)
// console.table(array);

// const cardToAdd = 3;
// const index = 3; 

// array.splice(1, 0, 10, 20, 30.);

// console.table(array);

// const cartToUpdate = 'Tony';
// const index = array.indexOf(cartToUpdate);
// console.log(index);

// array.splice(index, 1, 'Tony - 1000')
// console.table(array);
