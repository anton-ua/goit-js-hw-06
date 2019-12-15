import users from "./users.js";

const getUserNames = users => {
  const userNames = users.map(user => user.name);
  return userNames;
};

console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => {
  const usersListEyeColor = users.filter(user => user.eyeColor === color);
  return usersListEyeColor;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
  const usersListGender = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return usersListGender;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = users => {
  const inactiveUsersList = users.filter(user => !user.isActive);
  return inactiveUsersList;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
  const usersListAge = users.filter(user => user.age >= min && user.age <= max);
  return usersListAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => {
  const totalBalance = users.reduce((total, user) => total + user.balance, 0);
  return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  const usersList = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  return usersList;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = users => {
  const sortNamesByFriends = (a, b) => a.friends.length - b.friends.length;
  const usersNamesSorted = users.sort(sortNamesByFriends).map(user => user.name);
  return usersNamesSorted;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = users =>
  users.reduce((allSkills, user) => {
    user.skills.forEach(skill => {
      if (!allSkills.includes(skill)) {
        allSkills.push(skill);
      }
    });

    return allSkills.sort();
  }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
