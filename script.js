/* eslint-disable max-classes-per-file */
window.onload = () => {
  const add = document.querySelector('.add');

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  class Methods {
    constructor() {
      this.bookList = [];
      this.addBook = document.querySelector('.add-book');
      this.parser = new DOMParser();
    }

    removeBook = (e, newBookElement) => {
      const index = e.target.getAttribute('myIndex');
      this.bookList = this.bookList.filter((element, i) => {
        if (i === parseInt(index, 10)) {
          return false;
        }
        return true;
      });
      newBookElement.remove();
      localStorage.setItem('bookArray', JSON.stringify(this.bookList));
      this.showBooks();
    };

    showBooks = () => {
      this.addBook.innerHTML = '';
      this.bookList.forEach((e, i) => {
        const newBook = `
        <div class="book-div">
        <p>"${e.title}" by ${e.author}</p>
        <button type="button" class="remove" myIndex ="${i}" >Remove</button>
        </div>
        `;
        const newBookElement = this.parser.parseFromString(newBook, 'text/html').body.firstChild;
        const remove = newBookElement.querySelector('.remove');
        remove.addEventListener('click', (e) => {
          this.removeBook(e, newBookElement);
        });
        this.addBook.append(newBookElement);
      });
    };
  }

  const method = new Methods();
  const bookStorage = localStorage.getItem('bookArray');

  if (bookStorage) {
    method.bookList = JSON.parse(bookStorage);
    method.showBooks();
  }

  add.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const book = new Book(title, author);
    method.bookList.push(book);
    method.showBooks();
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    localStorage.setItem('bookArray', JSON.stringify(method.bookList));
  });
};
