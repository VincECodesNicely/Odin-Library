document.addEventListener("DOMContentLoaded", function () {
  const openPopupBtn = document.querySelector(".add-book");
  const popUpContainer = document.querySelector(".popup-container");
  const closeBtn = document.querySelector(".close-btn");

  openPopupBtn.addEventListener("click", function () {
    popUpContainer.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popUpContainer.style.display = "none";
  });
});

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
}

//this function will display all the books in myLibrary
function displayLibrary() {}
