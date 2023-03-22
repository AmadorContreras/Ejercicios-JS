// Asi se llama la clase de un archivo || poner bien la ruta.
import { Book } from "../book.js";
import { Author } from "../authors.js";
// const book1 = new Book("1321321", "Harry Potter", 2009, 10.99);


const authorHarry = [
    new Author(1, "J. ", "K. ", "Rowling ", 1965)
];
const authorHobbit = [
    new Author(1, "A. ", "S. ", "asdasd ", 1985)
];
const authorUnViaje = [
    new Author(1, "W. ", "F. ", "sfcffdf ", 1975)
];

// para crear una lista de libros
const booksList = [
    new Book("1321321", "Harry Potter", 2009, 10.99, authorHarry),
    new Book("234234", "El hobbit", 1999, 15.99, authorHobbit),
    new Book("2342342", "Un Viaje al centro de la tierra", 1999, 15.99, authorUnViaje)
];

// Imprimir los datos en 
let bookDatos = document.querySelector("#comic-container");


booksList.forEach(book => {
    bookDatos.innerHTML += book.render();

});


