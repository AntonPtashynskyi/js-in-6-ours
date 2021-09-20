// Arrays - Массивы

const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const fib = [1, 1, 2, 3, 5, 8, 13]
// const people = [
//   { firstName: 'Anton', budget: 4200 },
//   { firstName: 'Viktoria', budget: 3500 },
//   { firstName: 'Vlad', budget: 1700 }
//]

// Function
// function addItemToEnd() {
// }

// Method  - когда функцию вызываем в контексте обьекта, тогда это МЕТОД (если создаем отдельно то это Function)
// cars.push('Porsche') // method push - принимает элемент который хотим положить в оригинальный массив и изменить его
// cars.unshift('Lada') // добавляет значение в начало массива


// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar);
// console.log(lastCar);
// console.log(cars);

// console.log(cars.reverse());

// const index = cars.indexOf('BMW')
// cars[index] = 'BMW M'
// console.log(cars);
// ====================
// const index = people.findIndex(function (person) {
//   return person.budget === 3500
// })
// // console.log(people[index]);
// ====================
// const person = people.find(person => person.budget === 3500)
// console.log(person);
// ====================
// console.log(cars.includes('Mazda'));
// ====================
// let findedPerson               /Более громоздкая
// for (const person of people) {
//     if (person.budget === 3500) {
//     findedPerson = person
//   }
// }
// console.log(findedPerson);
// ====================
// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })
// console.log(upperCaseCars);
// ====================
// const pow2 = num => num ** 2

// const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib);
//==========================
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2) // map - приобразовывает данные
// const filteredNumbers =  pow2Fib.filter(num => { // filter - фильтрует данные
//   return num > 20
// })
// console.log(pow2Fib);
// console.log(filteredNumbers);
//==========================




// // Задача 1 
// const text = 'Привет, мы изучаем JS'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText);

// Задача 2
// const people = [
//   { firstName: 'Anton', budget: 4200 },
//   { firstName: 'Viktoria', budget: 3500 },
//   { firstName: 'Vlad', budget: 1700 }
// ]

// const allBudget = people
//   .filter(person => person.budget > 2000)
//   .reduce(function (acc, person) {
//    acc += person.budget
//    return acc
// }, 0)

// console.log(allBudget);