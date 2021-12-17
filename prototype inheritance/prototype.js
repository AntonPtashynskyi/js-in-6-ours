const user = {
  login: 'NAME',
  avatar: '',
  isAdmin: false,
  search() {
    this.searching = true;
  },
};

const admin = Object.create(user);
admin.isAdmin = true;

// методы animal
let animal = {
  eats: true,
  name: 'animal',
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },

  setName(newName) {
    this.name = newName;
  },
};

let rabbit = {
  jumps: true,
  name: 'White Rabbit',
  __proto__: animal,
};

// модифицирует rabbit.isSleeping
rabbit.sleep();
animal.sleep();
rabbit.name = 'Big rabbit';

console.log(rabbit.isSleeping);
console.log(animal.isSleeping);
console.log(rabbit.name);
console.log(animal.name);

animal.setName('Животное');
console.log(animal.name);
console.log(rabbit.name);
rabbit.setName('Кролик');

// console.log(rabbit.name);

// console.log(Object.keys(rabbit));
// for (const prop in rabbit) {
//   if (!rabbit.hasOwnProperty(prop)) {
//     return;
//   }
//   console.log(prop);
// }

console.log('rabbit', Object.keys(rabbit));
console.log('animal', Object.keys(animal));

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
