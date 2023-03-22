// clases || para que se pueda exportar fuera hay que poner export.

export class Book {
    //variable estatica
    // static tax = "10%";

    static stock = 10;

    // Los atributos privados solo se pueden utilizar dentro de la clase.
    #active = false;

    //Constructor || entidades
    constructor(isbn, title, release, price, authorslist) {
        //atributos o propiedades. todos con publicos si no se establese lo contrario
        this.isbn = isbn;
        this.title = title;
        this.release = release;
        this.price = price;

        // Lista de authores de otro archivo class
        this.authorslist = authorslist;


        // Cambia el valor de la variable stock por cada vez que se ha creado un libro nuevo o usado el construntor.
        Book.stock = Book.stock - 1;


    }
    //metodos
    priceWhitTax() {
        return this.price * 1.1;
    }
    render() {
        let authors=""
        this.authorsList.forEach(author => {
            authors+=author.render();
        });
        return `
        <article>
            <h3> ${this.isbn} </h3>
            <h1> ${this.title} </h1>
            <p> ${this.release} <p>
            <p class="price"> ${this.price}€<p>
            <p>${authors}</p>
        </article>
        `;
    }
    //este metodo es de una propiedad privada de la clase.
    sale() {
        if (this.#active) {
            console.log("Se puede vender");
        } else {
            console.log("No se puede vender");
        }
    }

    //metodo estatico || no per  || Esto se llama libreria, al conjunto de funciones estaticas.

    // static tax() {
    //     return "10%";
    // }
}

// class Comic extends Book {


//     constructor(isbn, title, release, price, volume) {
//         // nos referimos al padre || super es un metodo || llama el constructor del padre || super es el hijo.
//         super(isbn, title, release, price)
//         // Creamos una propiedad nueva.
//         this.volume = volume;

//     }
// }


// // Creando nueva objeto y los atributos
// const book1 = new Book("1321321", "Harry Potter", 2009, 10.99);
// const book2 = new Book("234234", "El hobbit", 1999, 15.99);
// const book3 = new Book("2342342", "Un Viaje al centro de la tierra", 1999, 15.99);

// // llamada de book1 y su metodos
// console.log(book1.priceWhitTax());
//console.log(book1.render());

// //Solo podemos ver por un methodo
// book2.sale();

// //llamada de funcion estatica de Book
// // console.log(Book.tax());

// //Llamada a variable estatica de Book
// // console.log(Book.tax);

// //Llamada a variable estatica de Book
// console.log(Book.stock);

//herencia || Nos sirve para reutilizar codigo que ya nos sirve.


// creamos nuevo comic
// const comic1 = new Comic("123235", "La patrulla X", 2022, 14, 1);

// console.log("precio comic:", comic1.priceWhitTax());
