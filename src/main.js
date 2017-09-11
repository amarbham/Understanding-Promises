const generateListItems = (items) => {
  return items.map((item) => {
    return `<li> ${item.name} - <span> ${item.email} </span></li>`;
  }).join('');
};

const generateUnorderedList = (listItems) => {
  return `<ul> ${listItems} </ul>`;
};

const addUsersToPage = (userList) => {
  document.getElementById('userList').innerHTML = userList;
};

const getJSON = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(response => reject(response));
  });
};

const user1 = getJSON('https://jsonplaceholder.typicode.com/users/1');
const user2 = getJSON('https://jsonplaceholder.typicode.com/users/2');
const user3 = getJSON('https://jsonplaceholder.typicode.com/users/3');

Promise.all([user1, user2, user3])
  .then(users => users.filter(user => user.id))
  .then(users => generateListItems(users))
  .then(userList => generateUnorderedList(userList))
  .then(userList => addUsersToPage(userList));
