let users = [];
users = import from './users.js'; // ? как правильно импортировать? в переменную?

// * Task-1

const getUserNames = users => {
  users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
