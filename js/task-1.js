import users from './users.js';
// console.log(users);

// * Task-1
/*
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ] */

// * Task-2
/*
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr] */

// ! Task-3 - not done
// Получить массив имен пользователей по полу (поле gender).
/* 
const getUsersWithGender = (users, gender) =>
  users.reduce((user, gender, allMen) => {
    user.gender === gender ? allMen.push(user.name) : '';
    return allMen;
  }, []);

// users.find(user => user.gender === gender);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ] */
// ? output = 6, why?

// * Task-4
//Получить массив только неактивных пользователей (поле isActive).
/*
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson] */

// * Task-5
//Получить пользоваля (не массив) по email (поле email, он уникальный).
/*
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head} */

// * Task-6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
/*
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age > min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony] */

// * Task-7
// Получить общую сумму баланса (поле balance) всех пользователей.
/*
const calculateTotalBalance = users =>
// --- ver.1
//   {
//   let total = users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
//   return total;
// };
  // ! --- ver.2
  users.reduce((acc, user) => {
    return acc + user.balance;
  }, 0);

console.log(calculateTotalBalance(users)); // 20916 */

// todo: Task-8
// Массив имен всех пользователей у которых есть друг с указанным именем.
/*
const getUsersWithFriend = (users, friendName) => {
  // твой код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
*/

// * Task-9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
/*
const getNamesSortedByFriendsCount = users => {
  // твой код
};

console.log(getNamesSortedByFriendsCount(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
*/

// * Task-10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
/*
const getSortedUniqueSkills = users => {
  // твой код
};

console.log(getSortedUniqueSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
*/
