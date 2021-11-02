// function classicAdd(a,b,c) {
//   return a + b + c;
// }

// console.log(classicAdd(4, 5, 6));

// const arrowAdd = (a, b, c) => { return a * b * c; };

// console.log(arrowAdd(3, 4, 4));

// const arrowOne = a => { return a + 44; };
// console.log(arrowOne(3));


// const add = (...args) => console.log(args);

// console.log(add(1, 3, 4, 4));

// const numbers = [5, 10, 15, 20, 25, 30];
// // numbers.forEach(function (number, index) {
// //   console.log(`Index ${index}, number ${number}`);
// // });

// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, number ${number} `);
// })
  
// for (const number of numbers) {
//   console.log(`Index ${numbers.indexOf(number)}, number ${number} `);
  
// }
// const logMessage = (number, index) => {
//   console.log(`index ${index}, number ${number}`)
// };

// numbers.forEach(logMessage);
// =================================== REPETA =================


// const fnA = function (message, callback) {
//   console.log(message);
//   // console.log(callback());
//   callback(100);
// }


// const fnB = function (number) {
//   console.log(`this is the log fnB`, number);
// }

// fnA("Function", fnB)

// ========
// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// }

// const sub = function (x, y) {
//   return x - y;
// }
// ==============================Inline - function ================

// doMath(4, 4, function (x, y) {  // anonym  function; 
//   return x + y;
// });
// doMath(4, 4, function (x, y) {
//   return x - y;
// });

// =================================
// const btnClick = document.querySelector('.js-btn');

// const handleBtnClick = function () {
//   console.log(`Click on the button`);
// }

// btnClick.addEventListener('click', handleBtnClick);
// =================================

// const filter = function (array, callback) {
//   const filteredArray = [];

//   for (const el of array) {
//     // console.log(el);
//     const passed = callback(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };

// const callbackMore = function (value) {
//   return value >= 3;
// };

// const callbackLess = function (value) {
//   return value <= 3;
// };

// console.log(filter([1, 2, 3, 4, 5], callbackMore,));
// console.log(filter([1, 2, 3, 4, 5], callbackLess,));

// ================================= ARROW FUNCTIONS
// const add = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
 
// console.log(add(2, 3));

// const addMy = (...args) => {
//   //console.log(arguments); // in arrow function we don't local variable ARGUMENTS;
//   // return a + b;
//   console.log(args);
// };

// console.log(addMy(2,5));

// const add1 = a => a > 100 ? true : false;

// console.log(add1(300));
// =====================================
// const fnA = function (value) {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());
// ===================================== return object in arrow function

// const arrowFnA = () => ({arrow: 5,});

// console.log(arrowFnA());

// ======================================================================
// Exercise 4 block 4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     //   return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName) : onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     // },
// // =================== to options solve this task
//   //  if (this.pizzas.includes(pizzaName)) {
//   //   return onSuccess(pizzaName)
//   //   }
//   //   return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   // }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
// ======================================================================
// Refactoring

// Exercise 5 block 4
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item); //less code
 
//   // Option 2
//   // orderedItems.forEach(function (item) {
//   //   totalPrice += item
//   // });

//   // Option 3
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   return totalPrice;
// }

// Exercise 6 block 4
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // best option 3 ?
//   numbers.forEach(number => number > value ? filteredNumbers.push(number) : undefined);


//   // Option 2
//   // numbers.forEach(number => {
//   //   if (number >  value) {
//   //     filteredNumbers.push(number)
//   //   }
//   // });  
//   // Option 1
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   return filteredNumbers;
// }

// Exercise 7 block 4

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(number => secondArray.includes(number) ? commonElements.push(number): undefined);

//   // firstArray.forEach(number => {
//   //   if (secondArray.includes(number)) {
//   //     commonElements.push(number);
//   //   }
//   // });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
// }

// Exercise 10 block 4

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => totalPrice += item);

//   return totalPrice;
// }

// Exercise 11 block 4

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => number > value ? filteredNumbers.push(number) : undefined)

//   return filteredNumbers;
// }

// Exercise 12 block 4

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => secondArray.includes(element) ? commonElements.push(element) : undefined);

//   return commonElements;
// }

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// ==================================MAP()==============================
// const array = [];
// students.forEach(student => {
    
//   array.push(student.name);
 
// });

// console.log(array);

// const names = students.map(student => student.name);

// console.log(names);

// for (const item of names) {
//   console.log(item);
// }
// ==================================flatMap()==============================

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// // console.log(students.map(student => student.courses));
// // console.log(students.flatMap(student => student.courses));

// const allCourses = students.flatMap(student => student.courses);
// const uniqCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqCourses);


// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];


// const best = students.filter(student => student.score > HIGH_SCORE);
// const worst = students.filter(student => student.score < LOW_SCORE);
// const average = students.filter(({ score}) => score < HIGH_SCORE && score > LOW_SCORE);

// console.log(average);


// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const find = colorPickerOptions.find(option => option.label === "green");
// console.log(find);

// console.log(colorPickerOptions.findIndex(option => option.label === "blue"));

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort()
// const ascendingScores = [...scores].sort();
// console.log(scores);
// console.log(ascendingScores);

// ===========================================REPETA webinar======================================
// =========================MAP=============================
// const students = [
//   { id: 'id1',name: "Манго", point: 20,online: true, courses: ["математика", "физика"] },
//   { id: 'id2',name: "Поли", point: 30, online: false,courses: ["информатика", "математика"] },
//   { id: 'id3',name: "Киви", point: 40, online: true,courses: ["физика", "биология"] },
// ];


// const studentsName = students.map(student => student.name);
// console.log(studentsName);

// const studentsCourse = students.flatMap(student => student.courses)
// console.log(studentsCourse);

// const updateStudents = students.map(student => {
//   return {
//     ...student,
//     point: student.point * 1.2,
//   };
// });

// // console.table(updateStudents)

// const studentToUpdate = 'id2';
// // const updateOneStudent = students.map(student => {
// //   if (studentToUpdate === student.id) {
// //     return {
// //       ...student,
// //      point: student.point + 20,
// //     };
// //   }
// //   return student;
// // });

// const updateOneStudent = students.map(student =>
//   studentToUpdate === student.id
//     ? ({ ...student, point: student.point + 20, })
//     : student
// );

// console.table(updateOneStudent)
// =========================FILTER=============================


// const numbers = [1, 3, 45, 6, 4, 22, 6, 77];
// const filteredNumbers = numbers.filter(number => {
//   return number > 5;
// })
// console.log(filteredNumbers);

// // const studentsOnline = students.filter(student => student.online)
// const studentsOnline = students.filter(({online}) => online) // деструктуризация
// console.table(studentsOnline); // not online ***"!online"***

// =========================FIND=============================

// const uniqNumber = numbers.find(number => number === 22);
// console.log(uniqNumber);

// const studentID = 'id2';
// const findStudent = students.filter(student => student.id === studentID);

// console.log(findStudent);

// // find in function
// const findPlayerById = (allPlayers, playerId) => {
//   return allPlayers.find(player => player.id === playerId);
// };

// =========================EVERY - SOME =============================
// every elements on array is "true"? if yes then return true
// const isOnline = students.every(student => student.online);
// console.log(isOnline);

// const isOnlineSome = students.some(student => student.online);
// console.log(isOnlineSome);

// =========================*** REDUCE ***=============================


// const numbers = [1, 3, 45, 6];

// const total = numbers.reduce((acc, number) => {
//   console.log('acc', acc);
//   console.log('number', number);

//   return acc + number;
// }, 0);

// console.log(total);

// total salary from Object
// const salary = {
//   mango: 100,
//   poly: 200,
//   alex: 175,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );

// console.log(totalSalary);

// const students = [
//   { id: 'id1',name: "Манго", point: 20,online: true, courses: ["математика", "физика"], },
//   { id: 'id2',name: "Поли", point: 30, online: false,courses: ["информатика", "математика"], },
//   { id: 'id3',name: "Киви", point: 40, online: true,courses: ["физика", "биология"] },
// ];

// // ===========================================total numbers

// const totalPoint = students.reduce(
//   (totalPoint, student) => {
//   return totalPoint + student.point;
// }, 0);

// console.log(totalPoint);
// // ===========================================total text
// const allCourses = students.reduce((allCourses, coursesName) => {
//   return allCourses + coursesName.courses;
// }, "" );
//  console.log(allCourses);
