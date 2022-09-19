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

  let showBooks = () => {
    bookList.forEach((e, i) =>{
      const newBook = `
      <div>
      <p>${e.title}</p>
      <p>${e.author}</p>
      <button type="button" class="remove" myIndex ="${i}" >Remove</button>
      </div>
      `;      
      const newBookElement = parser.parseFromString(newBook, 'text/html').body.firstChild;      
      addBook.append(newBookElement); 
    })
  }



  add.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;  
      
      const book = new Book(title, author);
      bookList.push(book);
      showBooks()      
  });

  const removeBook = (index) => {

  }
};


/* if (title == "" || author == ""){
  const error = 'All fields are required';
  const errorElement = parser.parseFromString(error, 'text/html').body.firstChild;
  errorMsg.append(errorElement) 
}else {
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

} */

/*   const bookListString = bookList.map((element) => `
    <div>
      <p>${element.title}</p>
      <p>${element.author}</p>
      <button type="button" class="remove">Remove</button>
    </div>
   `);
  bookListString.forEach((string) => {
    const bookListElement = parser.parseFromString(string, 'text/html').body.firstChild;
    addBook.append(bookListElement);
  }); */

  /* const newBook = `
      <div>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button type="button" class="remove">Remove</button>
      </div>
      `;
      
      const newBookElement = parser.parseFromString(newBook, 'text/html').body.firstChild;
      bookList.push(book);
      addBook.append(newBookElement);  */