// Strings
// const firstName = 'Anton'
// const age = 30

// function getAge() {
//   return age
// }

// const output = 'привет, меня зовут ' + firstName + ' и мой возраст ' + age + ' лет'

// const output = `Привет, меня зовут ${firstName} и мой возраст ${age < 31 ? 'A' : 'B'}`
// console.log(output)

// const output = `
// <div>This is div </div>
// <p>this is p</p>
// `
// console.log(output)

// const firstName = 'Anton Ptashynskyi '

// console.log(firstName.length)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.charAt(3))
// console.log(firstName.indexOf('ns'))
// console.log(firstName.toLowerCase().startsWith('a'))
// console.log(firstName.endsWith('i'))
// console.log(firstName.repeat(10))

// const string = '          password    '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
    age = 'Not born'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Anton'
const personName2 = 'Max'
const personAge = 30
const personAge2 = -10

const output = logPerson`Name:  ${personName}, Age: ${personAge}!`
const output2 = logPerson`Name:  ${personName2}, Age: ${personAge2}!`

console.log(output)
console.log(output2)