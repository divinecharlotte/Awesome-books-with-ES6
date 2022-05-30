import Book from './modules/books.js';
import handleTime from './modules/dateTime.js';

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

const list = document.querySelector('#n1');
const addBook = document.querySelector('#n2');
const contactUs = document.querySelector('#n3');

list.addEventListener('click', () => {
  document.getElementById('show-book').style.cssText = 'display: flex;';
  document.getElementById('book-form').style.cssText = 'display: none;';
  document.getElementById('show-contact').style.cssText = 'display: none;';
});

addBook.addEventListener('click', () => {
  document.getElementById('show-book').style.cssText = 'display: none;';
  document.getElementById('book-form').style.cssText = 'display: flex;';
  document.getElementById('show-contact').style.cssText = 'display: none;';
});

contactUs.addEventListener('click', () => {
  document.getElementById('show-book').style.cssText = 'display: none;';
  document.getElementById('book-form').style.cssText = 'display: none;';
  document.getElementById('show-contact').style.cssText = 'display: flex;';
});

export default { list, addBook, contactUs };