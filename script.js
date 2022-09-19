window.onload = () => {
  const add = document.querySelector('.add');
  const remove = document.querySelector('.remove');
  const addBook = document.querySelector('.add-book');
  const parser = new DOMParser();

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  const bookList = [];

  const bookListString = bookList.map((element) => `
    <div>
      <p>${element.title}</p>
      <p>${element.author}</p>
      <button type="button" class="remove">Remove</button>
    </div>
   `);
  bookListString.forEach((string) => {
    const bookListElement = parser.parseFromString(string, 'text/html').body.firstChild;
    addBook.append(bookListElement);
  });

  add.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;

    const book = new Book(title, author);
    const newBook = `
    <div>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button type="button" class="remove">Remove</button>
    </div>
    `;

    const newBookElement = parser.parseFromString(newBook, 'text/html').body.firstChild;
    bookList.push(book);
    addBook.append(newBookElement);
  });
};