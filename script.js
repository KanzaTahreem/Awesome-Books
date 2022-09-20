/* eslint-disable max-classes-per-file */
window.onload = () => {
  const add = document.querySelector('.add');

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  class Library {
    constructor() {
      this.bookList = [];
      this.addBook = document.querySelector('.add-book');
      this.parser = new DOMParser();

      this.removeBook = (e, newBookElement) => {
        const index = e.target.getAttribute('myIndex');
        this.bookList = this.bookList.filter((element, i) => {
          if (i === parseInt(index, 10)) {
            return false;
          }
          return true;
        });
        newBookElement.remove();
      };

      this.showBooks = () => {
        this.addBook.innerHTML = '';
        this.bookList.forEach((e, i) => {
          const newBook = `
          <div>
            <p>${e.title}</p>
            <p>${e.author}</p>
            <button type="button" class="remove" myIndex ="${i}" >Remove</button>
          </div>
          `;
          const newBookElement = this.parser.parseFromString(newBook, 'text/html').body.firstChild;
          const remove = newBookElement.querySelector('.remove');
          remove.addEventListener('click', (e) => {
            this.removeBook(e, newBookElement);
            localStorage.setItem('bookArray', JSON.stringify(this.bookList));
          });
          this.addBook.append(newBookElement);
        });
      };
    }
  }

  const library = new Library();
  const bookStorage = localStorage.getItem('bookArray');

  if (bookStorage) {
    library.bookList = JSON.parse(bookStorage);
    library.showBooks();
  }

  add.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const book = new Book(title, author);
    library.bookList.push(book);
    library.showBooks();
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    localStorage.setItem('bookArray', JSON.stringify(library.bookList));
  });
};
