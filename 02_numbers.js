// 1 Number

// const num = 42    // integer whole number
// const float = 42.42 // float
// const pow = 10e3 //
// const maxSafeInt = Number.MAX_SAFE_INTEGER  // максимально число с которым мы можем работать.

// console.log('Max Safe Intenger', maxSafeInt)
// console.log('Math Pow 53', Math.pow(2, 53) - 1)
// console.log('Min Intenger', Number.MIN_SAFE_INTEGER)

// console.log('MAX Value', Number.MAX_VALUE)
// console.log('MAX Value', Number.MIN_VALUE)

// console.log('MAX Value', Number.POSITIVE_INFINITY)  // infinity in JS (reserved)
// console.log('MAX Value', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0) // infinity


// console.log(Number.NaN)  // Not a Number, special meaning which means "number". Typeof - number 
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(isNaN(weird))
// console.log(isNaN(44))

// console.log(isFinite(Infinity))
// console.log(isFinite(42))

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 2)  // будет строка так как к строке прибавляем 2

// console.log(parseInt(stringInt) + 2)  // парсим строковые значения, получаем число
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

// console.log(parseInt(stringFloat) + 2) // parseInt не работает с десятичными числасми
// console.log(parseFloat(stringFloat) + 2)
// console.log(+(stringFloat) + 2)

// console.log(0.4 + 0.2) //? 0.6000000000001 :) 
// console.log(4 / 10, 1 / 5)
// console.log((0.4 + 0.2).toFixed(4)) // пполучаем 4 знака после запятой и в итоге получаем СТРОКУ

// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // внимание на скобки!



// 2 BIG INT - new date type. used for work with numbers  biggest that MAX SAFE INTENGER
// console.log(typeof 9007199254740991999999999n) //в конце числа ставим "n"


// // big int work only with big int!!!
// console.log(9007199254740991999999999n - 900719925474099199999999n)
// console.log(-9007199254740991999999999n) // не можем использовать десятые

// console.log(10n - 4) error

// console.log(parseInt(10n) - 4) // при помощи patseInt преобразовываем в простое число
// console.log(10n - BigInt(4)) // при помощи BigInt преобразовываем простое число в БИГ ИНТ
// console.log(5n / 2n)

// 3 MATH
// console.log(Math.E) // exponent
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))          // Брать модуль числа, отсикаем негативную часть и извлекаем модуль, в итоге получаем 42
// console.log(Math.max(1, 32, 44, 11, 445,))
// console.log(Math.min(1, 32, 44, 11, 445,))

// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.9))  // округляет в высшую сторону
// console.log(Math.trunc(4.9)) //removing any fractional digits



// Example

//console.log(Math.random())
// function getRandomBetween(min, max) {
//   return Math.floor(Math.random () * (max - min + 1) + min)
// }

// console.log(getRandomBetween(1, 10))
