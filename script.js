let formEl = document.querySelector("form");
let addBookBtn = document.getElementsByClassName(".form-button");
let tbodyEl = document.querySelector("tbody");
let tableEl = document.querySelector("table");
let readBtn = document.querySelector("readBtn");
let deleteBtn = document.querySelector("deleteBtn");

let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  let newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  render();
}




function render() {
  tbodyEl.innerHTML += `
   <tr>
   <td>${author.value}</td>
   <td>${title.value}</td>
   <td>${pages.value}</td>
   <td><button class="readBtn" >${read.value}</button></td>
   <td><button class="deleteBtn" data-title="${title.value}" data-delete="delete">Delete</button></td>
   </tr>
  `;
}

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
});

tbodyEl.addEventListener("click", function (e) {
  if (e.target.className == "readBtn") {

    if (e.target.textContent == "Unread") {
      e.target.textContent = "Read";
    } else {
      e.target.textContent = "Unread";
    }
  }
});

tbodyEl.addEventListener("click", (e) => {
  const currentTarget = e.target;
  const dataDelete = currentTarget.dataset.delete;
  const tableRow = currentTarget.parentElement.parentElement;

  if (dataDelete === "delete") {
    myLibrary.splice(
      myLibrary.findIndex(
        (book) => title.value === currentTarget.dataset.title
      ),
      1
    );
    tableRow.remove();
  }
});