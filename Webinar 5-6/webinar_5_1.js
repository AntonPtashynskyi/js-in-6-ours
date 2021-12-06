// const playlist = {
//   name: 'My best playlist',
//   rating: 5,
//   track: ['tack-1', 'tack-2', 'tack-3'],
//   trackCount: 3,
// };

// console.log(playlist);
// console.log(playlist.name);         // обращение к ключам обьекта
// console.log(playlist.track);
// console.log(playlist.trackCount);

// const propertyName = 'track';

// console.log(playlist['trackCount']); // передаем ключ как строку!!!

// console.log(playlist[propertyName]); // обращение к переменной в которой лежит ссылка на ключ обьектаю. Встречаеться редко



// const inputValue = 'tomato';
// const inputName = 'color';

// const colorPickerData = {
//   [inputName]: inputValue,   // значение имя переменной в скобка [] станек ключем. ВЫЧИСЛЯЕМЫЕ СВОЙСТВА - вычисляет ключ с переменной
// }

// playlist.year = 1991;   // добавленме свойст в обьект


// console.log(colorPickerData);
// console.log(playlist);


// spread 
// const a = { name: 'Tony', lastName: 'Ptashka' };
// const b = { name: 'Vladilen', lastName: 'Low' };

// const c = {
//   ...a,
//   ...b,
//   lastName: 'Box',
//   age: '19'
// }

// console.log(c);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookArray = book.genres;
// const last = book.genres.length - 1;

// console.log(bookArray[last]);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Object.assign(apartment, { price: 5000, rating: 4.7,});
// Object.assign(apartment.owner, { name: "Henry Sibola"});
// apartment.tags.push("trusted")


// console.log(apartment);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key])
  
// }

// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//    values.push(apartment[key]) 
// 	if(apartment.hasOwnProperty(key)) {
//     // values.push(apartment[key])  
//   }
   
// }
// console.log(values);

