
// ////////////////////////////////////////
// Exercise 16 module (3)

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

// for (const key in salaries) {
//   if (Object.hasOwnProperty.call(salaries, key)) {
//     const element = salaries[key];

//     totalSalary += element;
    
//   }
// }
//     return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// // Exercise 17 module (3)

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);

// // Exercise 18 module (3)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {


//   for (const product of products) {
//     // console.log(product.price);
//     if (product.name === productName) {
//       return product.price;
//     }

//   }

//  return null
// }

// // console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));


// // Exercise 19 module (3)
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//   const propValues = [];

//   for (const product of products) {

//     if (product.hasOwnProperty(propName)) {
//       propValues.push(product[propName]);
//     }

//   }

//    return propValues
// }

// console.log(getAllPropValues("toString"));
/////////////////////////////////////////////////////////////////
// function getAllPropValues(propName) {

//   const propValues = [];

//   for (const product of products) {
//     const productKeys = Object.keys(product);
//     const keyIndex = productKeys.indexOf(propName);

//     if (keyIndex !== -1) {
//       propValues.push(product[propName]);
//     }
//     // console.log(productKeys);
//     // console.log(keyIndex);

//   }

//    return propValues
// }

// console.log(getAllPropValues("price"));

// // Exercise 20 module (3)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

 
  
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//    return 0;
// }

// console.log(calculateTotalPrice('Radar'));

// Change code below this line
// function calculateMeanTemperature({
//   today: {low: todayLow, high: todayHigh,},
//   tomorrow:{low: tomorrowLow,high: tomorrowHigh,}
// }) {
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// Change code below this line

// Exercise 31 module (3)

// function add(...args) {
//   console.log(args);
//   let sum = 0;

//   for (const arg of args) {
//     sum += arg;
//   }

//   return sum;
// }

// console.log(add(15, 27));

// Exercise 32 module (3)

// function addOverNum(moreThenIt, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > moreThenIt) {
//     total += arg;  
//     }
    
//   }

//   return total;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// Exercise 33 module 3

// function findMatches([...argsArrayNumbers], ...argsNumber) {
//   const matches = []; // Don't change this line
//   console.log(argsNumber);

//   for (const arg of argsNumber) {
//     if (argsArrayNumbers.includes(arg)) {
      
//      matches.push(arg);
//     }
   
//   }
//   return matches;
// }

// // console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// // console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// Exercise 35 module 3

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const oldNameIndex = this.books.indexOf(oldName);
//     // console.log(oldNameIndex);
//     this.books.splice(oldNameIndex, 1, newName);
//     // console.log(this.books);
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));


// Exercise 39 module 3
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const indexRemove = this.potions.indexOf(potionName);
//     this.potions.splice(indexRemove, 1);
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));

// Exercise 40 module 3

// Change elements in array
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const oldNameIndex = this.potions.indexOf(oldName);
//     this.potions.splice(oldNameIndex, 1, newName);

//   },
// };

// Exercise 41 module 3


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
    
//      for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
   
//   },
//   removePotion(potionName) {
//      for (const potion of this.potions) {
//       if (potionName === potion.name ) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//        for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
  
//   },
  
//   // Change code above this line
// };
