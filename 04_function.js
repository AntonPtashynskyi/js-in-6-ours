// 1 FUNCTION


// Function Declaration - можем обращаться к ней когда захотим, функция может быть ниже в коде и все равно будет работатью.
// function greet(name) {
//   console.log('Hi - ', name);
// }

// Function Expression - нельяза обращаться до инициализации.
// const greet2 = function (name) {  // вызов функции через переменную, анонимная функция (анонимная это когда значение в () пустое) но мы кладем ее в переменну.
//   console.log('Hi - ', name);
// }

// // greet('Anton')
// // greet2('Anton2')

//  function greet(name) {
//   console.log('Hi - ', name);
// }

// // console.log(typeof greet);
// console.dir(greet)


// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//  if (counter === 20) {
//    clearInterval(interval)  // clearTimeout
//  } else {
//   console.log(++counter); 
//   }
// }, 250)

//  Стрелочные функции
// function greet(name) {
//   console.log('Hi - ', name);
// }

// const arrow = (name, Age) => {
//   console.log('Hi - ', name, Age);
// }

// const arrow2 = name => console.log('Hi - ', name); //same like in the top

// arrow('Anton')
// arrow('Anton2')

// const pow2 = num => {
//   return num ** 2
// }
// console.log(pow2(5));

// const pow3 = num => num ** 2
// console.log(pow3(10));

//  4 Параметры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum(41, 2));
// console.log(sum());

// function sumAll(...all) {
//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
// }

// const res = sumAll(1, 2, 4, 6, 7, 4,)
// console.log(res);


//  5 Замыкания c одной функции возвращаем другую

function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  }
}

const logWithLastName = createMember('Anton')
console.log(logWithLastName('Ptashka'));