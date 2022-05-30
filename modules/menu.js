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

export { list, addBook, contactUs };