let books = [];


function displayBooks() {

    let table = document.getElementById("bookTable");
    table.innerHTML = "";

    for (let i = 0; i < books.length; i++) {

        let status = "";

        if (books[i].quantity > 0) {
            status = "<span class='available'>Available</span>";
        }
        else {
            status = "<span class='out'>Out Of Stock</span>";
        }

        table.innerHTML += `
        <tr>
            <td>${books[i].id}</td>
            <td>${books[i].bookName}</td>
            <td>${books[i].author}</td>
            <td>${books[i].category}</td>
            <td>${books[i].quantity}</td>
            <td>${status}</td>
        </tr>
        `;
    }

    document.getElementById("totalBooks").innerHTML = books.length;
}

function addBook() {

    let id = Number(prompt("Enter Book ID"));
    let name = prompt("Enter Book Name");
    let author = prompt("Enter Author Name");
    let category = prompt("Enter Category");
    let quantity = Number(prompt("Enter Quantity"));

    let book = {
        id: id,
        bookName: name,
        author: author,
        category: category,
        quantity: quantity
    };

    books.push(book);

    displayBooks();

    alert("Book Added Successfully");
}


function updateBook() {

    let id = Number(prompt("Enter Book ID To Update"));

    let book = books.find(b => b.id === id);

    if (book) {

        book.bookName = prompt("Enter New Book Name", book.bookName);
        book.author = prompt("Enter New Author Name", book.author);
        book.category = prompt("Enter New Category", book.category);
        book.quantity = Number(prompt("Enter New Quantity", book.quantity));

        displayBooks();

        alert("Book Updated Successfully");
    }
    else {
        alert("Book Not Found");
    }
}


function deleteBook() {

    let id = Number(prompt("Enter Book ID To Delete"));

    books = books.filter(b => b.id !== id);

    displayBooks();

    alert("Book Deleted Successfully");
}


function issueBook() {

    let id = Number(prompt("Enter Book ID"));

    let book = books.find(b => b.id === id);

    if (book) {

        if (book.quantity > 0) {

            book.quantity--;

            displayBooks();

            alert("Book Issued Successfully");
        }
        else {

            alert("Book Out Of Stock");
        }

    }
    else {

        alert("Book Not Found");
    }

}


function returnBook() {

    let id = Number(prompt("Enter Book ID"));

    let book = books.find(b => b.id === id);

    if (book) {

        book.quantity++;

        displayBooks();

        alert("Book Returned Successfully");
    }
    else {

        alert("Book Not Found");
    }

}


function bookStatus() {

    let id = Number(prompt("Enter Book ID"));

    let book = books.find(b => b.id === id);

    if (book) {

        if (book.quantity > 0) {

            alert("Available");
        }
        else {

            alert("Out Of Stock");
        }

    }
    else {

        alert("null");
    }

}

displayBooks();