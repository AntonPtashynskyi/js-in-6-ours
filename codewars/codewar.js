// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// const str = 'the-stealth-warrior';
// const str2 = 'The_Stealth_Warrior';

// function toCamelCase(str) {
//   const splitStr = str.split(/[- || _]/);
//   // .map((word) =>
//   //   word.charAt(0) === word.charAt(0).toUpperCase()
//   //     ? word.charAt(0).toUpperCase() + word.slice(1)
//   //     : null
//   // );

//   if (splitStr[0].charAt(0) === splitStr[0].charAt(0).toUpperCase()) {
//     splitStr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
//   } else {
//     splitStr
//       .map((word) => word.charAt(1).toUpperCase() + word.slice(1))
//       .join('');
//   }
//   return splitStr;

//   // return splitStr.join('');
// }

// console.log(toCamelCase(str));
// console.log(toCamelCase(str2));
// ========================================================================================ss

// function filter_list(l) {
//   return l.filter((value) => Number.isInteger(value));
// }

// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
// ========================================================================================ss TOOOOOO DOOOOOOO!!!!
// function uniqueInOrder(iterable) {
//   const arr = iterable.split('');
//   console.log(arr);
//   // return arr.filter((letter, index, array) => array.indexOf(letter) === index);
//   return arr.reduce((acc, letter, index, array) => {
//     if (array.includes(letter)) {
//       return array.push(letter);
//     }
//   }, []);
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// ========================================================================================ss
// Duplicate Encoder

// function duplicateEncode(word) {
//   let object = {};

//   const letters = word.toLowerCase().split('');
//   for (let i = 0; i < letters.length; i += 1) {
//     let x = letters[i];

//     if (object[x] === undefined) {
//       object[x] = 1;
//     } else {
//       object[x] += 1;
//     }
//   }

//   return letters.map((letter) => (object[letter] === 1 ? '(' : ')')).join('');
// }

// another

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split('')
//     .map(function (letter, array) {
//       return array.indexOf(letter) === array.lastIndexOf(letter) ? '(' : ')';
//     })
//     .join('');
// }

// // The lastIndexOf() method returns the last index at which a given element
// // can be found in the array, or - 1 if it is not present.
// // The array is searched backwards, starting at fromIndex.

// duplicateEncode('din');
// duplicateEncode('recede');
// duplicateEncode('Success');
// duplicateEncode('(( @');
// ========================================================================================ss
