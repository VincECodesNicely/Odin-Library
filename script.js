document.addEventListener("DOMContentLoaded", function () {
  const openPopupBtn = document.querySelector(".add-book");
  const popUpContainer = document.querySelector(".popup-container");
  const closeBtn = document.querySelector(".close-btn");
  const contentBlur = document.querySelector(".content-blur");

  openPopupBtn.addEventListener("click", () => {
    contentBlur.classList.add("blurred");
    popUpContainer.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    contentBlur.classList.remove("blurred");
    popUpContainer.style.display = "none";
  });
});

const mainContent = document.querySelector(".main-content");
const myLibrary = [];

function Book(id, title, author, numOfPages, readStatus) {
  // the constructor...
  this.id = id;
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
}

//this function is adding in new book objects into myLibrary
function addBookToLibrary(title, author, numOfPages, readStatus) {
  // take params, create a book then store it in the array
  let book = new Book(
    crypto.randomUUID(),
    title,
    author,
    numOfPages,
    readStatus
  );
  myLibrary.push(book);
  displayLibrary();
  //   console.log(myLibrary);
  return console.log(book);
}

//this function will display all the books in myLibrary
function displayLibrary() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <p><strong>Title:</strong> ${book.title}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.numOfPages}</p>
      <p><strong>Status:</strong> ${book.readStatus}</p>
    `;

    cardContainer.appendChild(bookCard);
  });
}

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const title = formData.get("title");
  const author = formData.get("author");
  const numOfPages = formData.get("numOfPages");
  const readStatus = document.querySelector(
    'input[name="readStatus"]:checked'
  ).value;

  form.reset();
  addBookToLibrary(title, author, numOfPages, readStatus);
});
