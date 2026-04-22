const books = [
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: "1925"
    },
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: "1960"
    },
    {
        name: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        year: "1948"
    },
    {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: "1813"
    }

];

function renderBooks() {
    const grid = document.querySelector(".booksGrid");
    grid.innerHTML = "";

    if (books.length === 0) {
        grid.innerHTML = "<p class='noBooks'>No Books Available</p>";
        return;
    }

    books.forEach(function (book, index) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.innerHTML = `
            <h2 class="book-name" >${book.name}</h2>
            <p class="book-author" ><strong>Author:</strong> ${book.author}</p>
            <p class="book-genre" ><strong>Genre:</strong> ${book.genre}</p>
            <p class="book-year" ><strong>Year:</strong> ${book.year}</p>
            <button class="delete-btn" onclick="deleteBook(${index})">Delete</button>
        `;
        grid.appendChild(bookCard);

    });

}

function addBook() {
    const nameInput = document.getElementById("nameInput").value.trim();
    const authorInput = document.getElementById("authorInput").value.trim();
    const genreInput = document.getElementById("genreInput").value.trim();
    const yearInput = document.getElementById("yearInput").value.trim();

    if (nameInput === "" || authorInput === "" || genreInput === "" || yearInput === "") {
        document.getElementById("errorMessage").style.display = "block";
        return;
    }

    document.getElementById("errorMessage").style.display = "none";

    books.push({
        name: nameInput,
        author: authorInput,
        genre: genreInput,
        year: yearInput
    });

    document.getElementById("nameInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("genreInput").value = "";
    document.getElementById("yearInput").value = "";


    renderBooks();
}

document.getElementById("addBook").addEventListener("click", addBook);


function deleteBook(index) {

    books.splice(index, 1);
    renderBooks();

}








renderBooks();

