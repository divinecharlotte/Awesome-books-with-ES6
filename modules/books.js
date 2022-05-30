class Book {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('Bookstore')) || [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
    this.storeBookData();
    this.addBookToList();
  }

  addBookToList() {
    const table = document.querySelector('#book-list');
    let listOfBooks = '';
    this.books.forEach((book, index) => {
      listOfBooks += `
      <tr class="table-row">
       <td>"${book.title}" by ${book.author}</td>
      <td><button class="delete" type="button" id=${index}>Remove</button></td> 
      </tr>`;
    });
    table.innerHTML = listOfBooks;
    if (this.books.length > 0) {
      const deleteButtons = document.querySelectorAll('.delete');
      deleteButtons.forEach((btn) => { btn.addEventListener('click', this.deleteBook.bind(this)); });
    }
  }

  deleteBook(click) {
    const bookId = click.target.id;
    this.books.splice(bookId, 1);
    this.storeBookData();
    this.addBookToList();
  }

  storeBookData() {
    const bookdata = JSON.stringify(this.books);
    localStorage.setItem('Bookstore', bookdata);
  }
}

export default Book;