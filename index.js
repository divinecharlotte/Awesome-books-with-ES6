import Book from './modules/books.js';

const handleTime = () => {
  const dateContainer = document.querySelector('.date-container');
  const dateFunc = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = dateFunc.getFullYear();
  const month = months[dateFunc.getMonth()];
  let currentDate = dateFunc.getDate();
  const hour = dateFunc.getHours();
  const minutes = dateFunc.getMinutes();
  const second = dateFunc.getSeconds();
  if (currentDate === 1) currentDate = 'first';
  else if (currentDate === 2) currentDate = 'second';
  else if (currentDate === 3) currentDate = 'third';
  else currentDate += 'th';

  const time = (hour < 12) ? `${month} ${currentDate} ${year}, ${hour} ${minutes} ${second} AM`
    : `${month} ${currentDate} ${year}, ${hour} ${minutes} ${second} PM`;
  dateContainer.innerHTML = time;
};

window.addEventListener('load', () => {
  handleTime();
});

const Bookstore = new Book();

window.onload = () => { Bookstore.addBookToList(); };

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#tuthor');
  Bookstore.addBook(title.value, author.value);
  title.value = '';
  author.value = '';
});