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
