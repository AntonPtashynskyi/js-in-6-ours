// 1 Objects

const person = {
  firstName: 'Anton',
  age: 26,
  isProgrammer: true,
  languages: ['ru', 'en', 'de'],
  // 'complex key': 'Complex Value',
  // ['key_' + (1 + 3)]: 'Computed key', //key_4
  greet() {
    console.log('greet from person');
  },
  info() {
    console.info('Info about person by the name:', this.firstName) // this - в нутри функции являкться самой переменной, в нашем случае person 
  }
}
// console.log(person.info);
  

// ===================
// console.log(person.name);
// console.log(person['age']);
// console.log(person['complex key']);

// person.age++
// person.languages.push('by')
// console.log(person);
// // person['key_4'] = undefined
// delete person['key_4']

// console.log(person);
// ===================

//  2 Деструктуризация 
// ===================
// const firstName = person.firstName
// const age = person.age
// const languages = person.languages

// const {firstName, age: personAge, languages} = person
// console.log(firstName, personAge, languages);
// ===================

// чем опасен цикл FOR IN, проверяет(бежит) не только по ключам обьекта но также, заходит в его Prototype
// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key:', key);
//     console.log('value:', person[key]);
//   }
// }
// ===================
// const keys = Object.keys(person)
// keys.forEach((key) => {
//   console.log('key:', key);
//     console.log('value:', person[key]);
// })
// console.log(keys);
// ===================

// 3 Context
const logger = {
  keys() {
    console.log('Object keys: ', Object.keys(this) );
  },

  keysAndValues() {
    
  }
}

// const bound = logger.keys.bind(person)
// bound()
logger.keys.call(person)
// ===================
