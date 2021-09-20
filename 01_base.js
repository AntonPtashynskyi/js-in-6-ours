// 1 Типы данных
// 1 Переменный
// const firstName = 'Anton'
// // const lastName = 'Ptashynskyi' // string
// const age = 26 //number
// const isProgrammer = true  //boolean

// const _private = 'private'
// const $ = 'some value'

// const if = 'make' error

// const withNum5 = '5'

// 2 Мутирование 
// console.log('Имя человека: ' + firstName + ', a возраст человека: ' + age)
// console.log(age)

//const lastName = prompt('Введите фамилию:')
//alert (firstName + ' ' + lastName)

// 3 Операторы

// let currentYear = 2020
// const birthYear = 1993

// const age = currentYear - birthYear


// const a = 10
// const b = 5
// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(b / a)
// console.log(++currentYear)
// console.log(currentYear++)
// console.log(c)

//  4 Типы данных 

// const isProgrammer = true //Boolean
// const firstName = 'Anton' //String
// const age = 26            //Number
// let x                     //Undefined
// null                      //null

// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов 

// const fullAge = 29
// const birthYear = 1991
// const currentYear = 2021
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' //ready, fail, pending
// if (courseStatus === 'ready') {
//   console.log('Курс уже готов')
// } else if (courseStatus === 'pending') {
//   console.log('Курс не готов, ожидайте.')
// } else {
//   console.log('Ничего не знаю')
// }

// const isReady = false
// // Тернарное выражение
// isReady ? console.log('All good') : console.log('Not ready')

// if (isReady) {
//   console.log('Все готово')
// } else {
//   console.log('все не готово')
// }



// const num1 = 42
// const num2 = '42'

// console.log(num1 === num2)

// 7 Булевая логика 
// true && false  // = false  && = "И" оператор
// false && true // = false 
// true && true // = true

// // Сокращение результата false, false &&

// true || false // = true  || = "ИЛИ" оператор
// false || true // = true
// false || false // = false 

// //  сокраще результата true, true ||

// !true // = false  // ! оператор "НЕ"
// !!true // = true  // !! оператор "НЕ НЕ" = true 

// 8 Функции 
// function calculateAge(year) {
//   return 2021 - year
// }
// const myAge = calculateAge(1991)
// console.log(calculateAge(1992))
// console.log(calculateAge(1991))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//   if (age > 0) {
//     console.log('Человек по имение ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('is a future')
//   }

// }

// logInfoAbout('Антон', 1991)
// logInfoAbout('Антон', 2022)

// 9 Массивы
// const cars = ['Mazda', 'Mercedes', 'Ford']
// // console.log(cars)

// // const cars = new Array('Mazda', 'Mercedes', 'Ford')
// console.log(cars)

// console.log(cars[1])
// console.log(cars.length)

// cars[0] = 'Porsche'
// console.log(cars)
// // cars[3] = 'Mazda'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы

// const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Обьекты 
const person = {
  firstName: 'Anton',
  lastName: 'Ptashynskyi',
  year: 1991,
  languages: ['Ru', 'En', 'Pl'],
  hasWife: false,
  greet: function () {
    console.log('greet')
  }
}

console.log(person.firstName)  // обращаемься черкз "точку" к конкретному значениею
console.log(person['lastName']) // через строчку ['...text...']
const key = 'languages'  // через динамические ключи
console.log(person[key])
person.hasWife = true         //change boolean
person.isProgrammer = true    // add option 
console.log(person)
