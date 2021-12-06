// const arraySomeWords = [1, 44, 3,'string', 2, 5, 7];

// for (let i = 0; i < arraySomeWords.length; i += 1) {
//   const element = arraySomeWords[i];
//   // console.log('i', i);
// console.log('i : some', element);  
// }

// let dailyActivities = ['eat', 'sleep'];

// // dailyActivities.push('jump', 'run');
// dailyActivities.push('swim');

// console.log(dailyActivities);
// =======================================================
// const arraySomeWords = [1, 44, 3, 'Price', 2, 5, 'Bod', 7];

// let newArrayOnlyNumbers = [];
// let newArrayOnlyStrings = [];

// for (let i = 0; i < arraySomeWords.length; i += 1) {
//   const element = arraySomeWords[i];

//   if (typeof element === "string") {
//     newArrayOnlyStrings.push(element);
//     continue;
//     // break;
//   }
  
//   newArrayOnlyNumbers.push(element);
//   console.log('element', element);

// }

// console.log('newArrayOnlyNumbers', newArrayOnlyNumbers);
// console.log('newArrayOnlyNumbers', newArrayOnlyStrings);

// =======================================================


// let a = 4;
// console.log('old number', a);
// let b = a;

// a = 13;
// console.log('new a', a);
// console.log('old number', b);
// =======================================================

// const array = ['Commodity', 'CurrentService', 'Derivatives'];

// // console.log('array', array.includes('Commodity'));
// console.log(array.reverse());
// =======================================================

// Exercise 18

// function calculateTotal(number) {
//  let total = 0;

// for ( let i = 0; i <= number; i += 1) {
//   total += i;
//   } 
//   return total
// }

// console.log(calculateTotal(7));

// =====================================================
// Exercise 21

// function findLongestWord(string) {

//   let toArray = string.split(" ");
//   let word = toArray[0];
 
//   for (let i = 0; i < toArray.length; i += 1) {
//     if (word.length < toArray[i].length) {
//       word = toArray[i];
//     }
//     // console.log(toArray[i]);
//   }

//   return word;

// // const reducer = function (previousValue, currentValue) {
// //   return previousValue.length < currentValue.length ? currentValue : previousValue;
// // }
// // const word = toArray.reduce(reducer, " ");
// //   return word;
  

//   // return string.split(" ").reduce(
//   //   (previousValue, currentValue) => previousValue.length < currentValue.length ? currentValue : previousValue
//   // );
  
// }
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("May the force be with you"));
// ===============================
// Exercise 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
//   // Change code below this line
//   for (i = min; min <= max; min += 1) {
//     // console.log(min);
//     numbers.push(min);
    
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));

// ==============================
// Exercise 23


// function filterArray(numbers, value) {
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]);

//     if (numbers[i] > value) {
//       // console.log(numbers[i]);
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// ===========================================
// Exercise 24
// function getCommonElements(array1, array2) {
//   // Change code below this line
// const commonArray = [];
  
//   for (let i = 0; i < array1.length; i += 1) {
//    	if (array2.includes(array1[i])) {
//       commonArray.push(array1[i])
//     }
//   }

// return commonArray;
//  // Change code above this line
// }
// ===========================================
// Exercise 25

// function getCommonElements(array1, array2) {
// const commonArray = [];
  
//   for (let i = 0; i <array1.length; i += 1){
//   	if(array2.includes(array1[i])) {
//     	commonArray.push(array1[i]);
//     }
//   }

// return commonArray
// }
// ===========================================
// Exercise 26-27???
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for(const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
  
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ===========================
// Exercise 29

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (i = start; i <= end; i += 1) {
//     // console.log(i);
//    	 if (i % 2 === 0 ) {
//          evenNumbers.push(i)
//     }
//   }
  
//   return evenNumbers;

// }
  
// console.log(getEvenNumbers(2, 5));
// ===========================
// Exercise 32
// function includes(array, value) {

//   for (const number of array) {
//     if (number === value) {
    
//       return true;
//     }
    
//   }
//   return false;
// }


// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));

// ================================================ webinar


// function first() { } // function declaration

// const second = function () { } // function expression

// (function () {
//   console.log('call IIFE');
//  })(); // IIFE anonyms function

// // ================================================
// first(); // declaration anywhere !!! BAD !!!

// function first() {
//   console.log('first');
//  } // function declaration

// // ================================================


// const second = function () {
//   console.log('second');
//  } // function expression

// second();

// You need to calculate amount of tip to give in a restaurant/cafe.
// // 	Workflow:
// // 1.	User inputs check number. (Use “prompt” function).
// // 2.	User inputs tip percentage. (Use “prompt” function)
// // 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// // 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// // 5.	You need to calculate tip amount and total sum to pay.
// // 6.	Show message: (example). Use ”alert” function
// // Check number: 200
// // Tip: 15%
// // Tip amount: 30
// // Total sum to pay:  230

// // You should show only 2 numbers after comma (if needed).

// const toPay = prompt("Pleas enter check number");
// const tipPercent = prompt("Pleas enter tip percent");

// if (toPay === null || tipPercent === null) {
//   alert("Canceled")
// } else {
//   const formattedCheck = Number.parseFloat(toPay);
//   const formattedPercent = Number.parseFloat(tipPercent);
//   const tipSum = Number(((formattedCheck * formattedPercent) / 100).toFixed(2));
//   const totalPrice = Number((tipSum + formattedCheck).toFixed(2));

//   if (Number.isNaN(formattedCheck) || Number.isNaN(tipPercent) || totalPrice <= 0 || formattedPercent > 100 || formattedPercent < 0) {
//     alert("Invalid input data");
    
//   } else {
//     alert(`
//     Check number: ${formattedCheck}
//     Tip: ${formattedPercent}%
//     Tip amount: ${tipSum}
//     Total sum to pay: ${totalPrice}`)
//   }

// }
// ==================================



