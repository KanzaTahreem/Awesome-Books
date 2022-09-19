window.onload = () => {
  const add = document.querySelector('.add');
  const addBook = document.querySelector('.add-book');
  const parser = new DOMParser();

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  let bookList = [];

  const removeBook = (e, newBookElement) => {
    const index = e.target.getAttribute('myIndex');
    bookList = bookList.filter((element, i) => {
      if (i === parseInt(index, 10)) {
        return false;
      }
      return true;
    });
    newBookElement.remove();
  };

  const showBooks = () => {
    addBook.innerHTML = '';
    bookList.forEach((e, i) => {
      const newBook = `
      <div>
        <p>${e.title}</p>
        <p>${e.author}</p>
        <button type="button" class="remove" myIndex ="${i}" >Remove</button>
      </div>
      `;
      const newBookElement = parser.parseFromString(newBook, 'text/html').body.firstChild;
      const remove = newBookElement.querySelector('.remove');
      remove.addEventListener('click', (e) => {
        removeBook(e, newBookElement);
      });
      addBook.append(newBookElement);
    });
  };

  add.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const book = new Book(title, author);
    bookList.push(book);
    showBooks();
  });
};
