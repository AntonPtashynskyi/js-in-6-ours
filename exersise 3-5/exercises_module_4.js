
// Exercise 13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value)
//     } else {
//       newArray.push(number)
//     }

    
//   });
//  return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10) );

// Exercise 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// Exercise 15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);


// Exercise 16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// Exercise 17
// const getUserNames = users => {
//   const names = users.map(user => user.name);
	
//   return names;
// };

// console.log(getUserNames(users));

// Exercise 18
// const getUserEmails = users => {
//   const userEmail = users.map(user => user.email);

//   return userEmail;
// };

// Exercise 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// Exercise 20

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres, index,) => allGenres.indexOf(genres) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

// Exercise 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// Exercise 22

// const getUsersWithEyeColor = (users, color) => {
//   const eyeColor = users.filter(user => user.eyeColor === color);

//   return eyeColor;
// };


// // Exercise 22
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const findAge = users.filter(user => user.age >= minAge && user.age <= maxAge);

//   return findAge;

// };

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
// // Exercise 24
// const getUsersWithFriend = (users, friendName) => {
//   const findUserFriend = users.filter(user => user.friends.includes(friendName));
//   // const findUserFriend = users.filter(({friends}) => friends.includes(friendName));
//   return findUserFriend;
// };
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// // Exercise 25 =================================================ONLY UNIQ ELEMENTS IN ARRAY ================
// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   const uniqFriends = allFriends.filter((user, index, users) => users.indexOf(user) === index);

//   return uniqFriends;
// };

// console.log(getFriends(users));

// // Exercise 26
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive);
// };

// // Exercise 27
// const getInactiveUsers = (users) => {
//   return users.filter(user => !user.isActive);
// };

// // Exercise 28
// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// // Exercise 29
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email.includes(email));
// };
// // Exercise30
// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0 );
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0 );

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0 );
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0 );

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0 );
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0 );

// Exercise31
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive);
// };

// console.log(isEveryUserActive(users));

// // Exercise32
// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

// // Exercise33
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive) 
// };

// // Exercise34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc,number) => {
//   return acc += number;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// // Exercise35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((totalPlayedTime, player) => {
//   totalTimePerPlayer = player.playtime / player.gamesPlayed;
//   return totalPlayedTime += totalTimePerPlayer
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// // Exercise36
// ======================================WHY>????=================
// const calculateTotalBalance = users.reduce((totalBalance, user) => {
//   return totalBalance + user.balance;
// }, 0);

      // const calculateTotalBalance = users => {
      //   return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
      // };
      // console.log(calculateTotalBalance(users));


// // // Exercise37
// const getTotalFriendCount = users => {
//   return users.reduce((totalFriends, users) => totalFriends + users.friends.length, 0);
// };

// Exercise38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// Exercise39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((preDate, postDate) => preDate - postDate );

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// Exercise40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);

// Exercise41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((firstName, secondName) => firstName.author.localeCompare(secondName.author));

// const sortedByReversedAuthorName = [...books].sort((firstName, secondName) => secondName.author.localeCompare(firstName.author));

// const sortedByAscendingRating = [...books].sort((smallestRate, biggestRate) => smallestRate.rating - biggestRate.rating);

// const sortedByDescentingRating = [...books].sort((smallestRate, biggestRate) => biggestRate.rating - smallestRate.rating);

// Exercise42
// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance)
// };

// console.log(sortByAscendingBalance(users));

// // Exercise43
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };

// // Exercise44
// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };

// // Exercise45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books].filter(value => value.rating > 8).map(name => name.author).sort((a, b) => a[0].localeCompare(b[0]));

// console.log(names);

// // Exercise46

// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
  
// };
// console.log(getNamesSortedByFriendCount(users));

// // Exercise47
// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => user.friends)
//     .filter((elem, index, array) => array.indexOf(elem) === index)
//     .sort((a, b) => a.localeCompare(b));
// };

// console.log(getSortedFriends(users));


// // Exercise48
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users].filter(user => user.gender === gender).reduce((totalBalance, user) => totalBalance + user.balance, 0)
//  // .reduce((totalBalance, user) => totalBalance + user.balance, 0)
  
// };

// console.log(getTotalBalanceByGender(users, "female"));

