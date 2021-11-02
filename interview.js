// ============================================ types JS ==================================
// 1. null  ---> console.log(typeof null); = object ---> variable IS DEFINED but with out value
// 2. undefined ---> variable is NOT defined (or with out any properties)
// 3. boolean
// 4. number
// 5. object
// 6. string
// 7. symbol

// typeof

// ======================================= Преведение типов ===========================
// let language = 'JavaScript';
// if (language) {
//   // приведение строки в булю тоесть если строка то значит что true! если нет то false
//   console.log('The best language is', language);
// }

// FALSE VALUES
//  '', 0, null, false, undefined, Nan,
// console.log(Boolean(''));
// but [], {}, () array, object and function always give us TRUE

// ====================================== String and Number ====================================

// console.log(1 + '2'); // get string '12'
// console.log('' - 1 + 0); // get number -1! because symbol '-' is not defined to strings
// console.log('3' * '3'); // get 9 converting string to NUMBER
// console.log(4 + 10 + 'px'); // get 14px
// console.log('px' + 4 + 10); // get px410
// console.log('40' - 10); // 30
// console.log('42px' - 2); // NaN
// console.log(null + 2); // 2
// console.log(undefined + 30); // NaN

// ============================================= [ == vs ===] ============================
// == сравнивает значению НО с приведением типов
// === сравнивает только по значению но без приведения типов

// console.log(2 == '2'); //true
// console.log(2 === '2'); // false
// console.log(undefined == null); // true
// console.log(undefined === null); //false

// console.log('0' == false); // true
// console.log('0' == 0); // true
// console.log(0 === 0); // true

//============================ some examples
// console.log(false == ''); // true
// console.log(false == []); // true
// console.log(false == {}); // false

// console.log('' == 0);// true
// console.log('' == []);// true
// console.log('' == {});// false

// =================================== VALUES ==================================
// let a = [1, 2, 3];
// let b = a;
// b.push(4);
// let c = [1, 2, 3, 4];

// console.log(a);
// console.log(b);
// console.log(a === b);
// console.log(b === c);
//================================== SCOPE.JS ==============================
// доступность определенных пременных в функциях, ГЛОБАЛЬНЫЙ и ЛОКАЛЬНЫЙ (Область видимости)

// function fooA() {
//   let a = 1;

//   function fooB() {
//     let b = 2;

//     function fooC() {
//       let c = 3;

//       console.log('fooC', a, b, c);
//     }

//     fooC();
//     console.log('fooB', a, b);
//   }

//   fooB();
//   console.log(('fooA', a));
// }

// fooA();
//================================== HOISTING ==============================
// обращение до инициализации

//================== Function declaration & Function expression =================
// cпособы обьявления
// Function declaration
// console.log(square(25));

// function square(num) {
//   return num ** 2;     // -----> Function declaration may use before initialization
// }

// const square = function (num) {
//   return num ** 2; // ----> Function expression CANT!! use before initialization
// };
//================================== LET & CONST ==============================
// LET variable we can overwrite!

// let a = 'Variable a';
// let b = 'Variable b';
// {
//   a = 'New Variable A';
//   let b = 'Scope Variable B'; // variable with was declare with LET in one local Scope available only in local Scope and don't change variable in another Scope
//   console.log('scope b:', b);
//   console.log(a);
// }
// console.log(b);
// console.log(a);

// CONST - we Can't reassign CONST in primitives(like in LET),
//but in ARRAY & OBJECT we can(add) write down new properties
// const PORT = 8000;
// const arr = ['JS', 'is', 'awesome'];
// arr.push('!');
// arr[0] = 'JavaScript';
// console.log(arr);

// const obj = {};
// obj.name = 'Tony';
// obj.age = 23;
// console.log(obj);

// ============================= CLOSURES - замыкания ===============================
//Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.
//Другими словами, замыкание даёт вам доступ к Scope(en - US) внешней функции из внутренней функции.
//В JavaScript замыкания создаются каждый раз при создании функции, во время её создания.

// closure gives you access to an outer function’s scope from an inner function
// function sayHelloTo(name) {
//   const message = 'Hello ' + name;

//   return function () {
//     console.log(message); // замыкаеться функция внутри функции
//   };
// }

// sayHelloTo();
// const helloToAnton = sayHelloTo('Anton');
// helloToAnton();

// function createFrameWorkManager() {
//   const fw = ['Angula', 'React'];

//   return {
//     print: function () {
//       console.log(fw.join('-'));
//     },
//     add: function (framework) {
//       fw.push(framework);
//     },
//   };
// }

// const mng = createFrameWorkManager();
// console.log(mng);
// mng.print();

// mng.add('VueJS');
// mng.print(); // не можем отедльно получить перемеенную fw но можем с ней взаимодействовать через фенкции которые замыкают в себе эту переменную

// ================== SET TIMEOUT - setTimeout ============================!!!
// const fib = [1, 2, 3, 5, 8, 13];
// for (let i = 0; i < fib.length; i += 1) {
//   setTimeout(function () {
//     console.log(`fib ${i} = ${fib[i]}`);
//   }, 1500);
// }
// ============================= Immediate invoke Function Expression ===============================
// let result = [];
// for (let i = 0; i < 5; i += 1) {
//   result.push(function () {
//     console.log(i);
//   });
// }
// console.log(result[2]());

// for (var i = 0; i < 5; i += 1) {
//   (function () {
//     var j = i;
//     result.push(function () {
//       console.log(j);
//     });
//   })();
// }

// console.log(result[2]());
// ============================= Context js ===============================
// const person = {
//   surname: 'Stark',
//   knows: function (what, name) {
//     console.log(`You are  ${what} know about ${name}, ${this.surname}`);
//   },
// };

// const john = {
//   surname: 'Snow',
// };

// person.knows('all', 'John');
// person.knows.call(john, 'nothing', 'John'); // вызов функции с одного обьекта в контексте другого, в качевстве аргуменов принимаем параметры с вызываемой функции.
// person.knows.apply(john, ['nothing', 'John']);
// person.knows.call(john, ...['nothing', 'John']);
// person.knows.bind(john, 'nothing', 'John'); // возвращает новую функцию какбы записывает функцию в себя

// arrow function don't have his own THIS context
// ============================= Prototype inheritance ===============================
// ============================= Async in JS ===============================
