// class Car1 {
//   static description = 'aboutCar';
//   static logInfo(carObj) {
//     console.log('Car.logInfo ->', carObj);
//   }

//   constructor({ brand, model, price, maxSpeed } = {}) {
//     console.dir(Car1);

//     this.brand = brand;
//     this.model = model;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     return (this._price = newPrice);
//   }
// }

// const carInstance = new Car1({
//   brand: 'Audi',
//   model: 'Q3',
//   price: '35000',
//   maxSpeed: '220',
// });
// carInstance.price = 9999;
// console.log(carInstance);
//=========================================================================
// class User {
//   constructor(email) {
//     this.email = email;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
// }

// class Admin extends ContentEditor {
//   constructor({ email, posts, position }) {
//     super({ email, posts });
//     this.position = position;
//   }
// }

// const alex = new Admin({
//   email: 'gmail.com',
//   posts: '200',
//   position: 'index-1',
// });

//=========================================================================
// методы animal
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   walk: true,
//   __proto__: animal,
// };

// // // Object.keys возвращает только собственные ключи
// // console.log(Object.keys(rabbit)); // jumps

// // // for..in проходит и по своим, и по унаследованным ключам
// // for (let prop in rabbit) console.log(prop); // jumps, затем eats
// // console.log(rabbit.hasOwnProperty('eats'));

// // for (const prop in rabbit) {
// //   const isOwn = rabbit.hasOwnProperty(prop);

// //   if (isOwn) {
// //     console.log(`${prop} is our props `);
// //   } else {
// //     console.log(`${prop} is inherited props `);
// //   }
// // }

// console.dir(animal);
// class User {
//   constructor({ name, age, weight }) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//   }
// }

// const Anton = new User({ name: 'Tony', age: 20, weight: '70kg' });
// console.dir(User);
// console.log(Anton.name);
// console.log(Anton.weight);
// console.log(Anton.age);

// const obj = {};
// console.dir(obj);
// console.dir(obj.toString());
// console.log(obj.__proto__.toString === Object.prototype.toString);

// const array = [1, 2, 3];
// console.log(array.__proto__);
// console.log(Array.prototype);
// console.log(array.toString());

// const foo = function () {};
// console.dir(foo.__proto__);
// function f() {}
// console.log(f.__proto__.__proto__ == Object.prototype);

// const num = 5;
// console.log(num.__proto__);
// console.log(Number.prototype);

// const str = 'Hi';
// console.log(str.__proto__);
// console.log(String.prototype);

// const boo = true;
// console.log(boo.__proto__);
// console.log(Boolean.prototype);
// console.log(Object.getPrototypeOf(obj));
// // Initialize an object
// const user = {
//   username: 'AzureDiamond',
//   password: 'hunter2',
// };

// // Seal the object
// const newUser = Object.seal(user);

// newUser.password = '*******';
// // newUser.active = true;

// console.log(newUser);
// console.log(user);
function includes(array, value) {
  for (const elem of array) {
    if (elem === value) {
      return true;
    }
  }
  return false;
}

console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);

console.log(includes([1, 2, 3, 4, 5], 3));

console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
);
