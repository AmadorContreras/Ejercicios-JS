/*////////////////////  Ejercicio 4 /////////////////////////////*/
let text = document.querySelector('#text4');
const result = document.querySelector('#resultado4');
const btn_result_4 = document.querySelector('#btn-result-4');


function contarAs(texto) {
    let contador = 0;
    texto = texto.value
    let upperCase = texto.toUpperCase();
    for (var i = 0; i < upperCase.length; i++) {
        if (upperCase.charAt(i) == 'A') {
            contador += 1;
        }
    }
    result.innerHTML = `${contador} As en la frase: ${texto}`;
}
/*////////////////////  Ejercicio 4 /////////////////////////////*/
/*////////////////////  Ejercicio 5 /////////////////////////////*/
let precio = document.querySelector('#precio');
const result5 = document.querySelector('#resultado5');
const btn_5 = document.querySelector('#btn-result-5');


function calculaPrecioProducto(precio) {
    precio = Number(precio.value);
    total = 0;
    // precio entre 10 y menys de 50
    if ((precio < 50) && (precio > 10)) { 
        total = precio - 5;
    // precio entre 50 y 100
    } else if ((precio >= 50) && (precio <= 100)) {
        total = precio - 10;
     // precio mayor de 100
    } else if (precio > 100) { 
        total = precio * 0.90;
    } else {
        total = precio;
    }
    result5.innerHTML = `El precio total con descuento es ${total}`
}

function init() {
    /*////////////////////  Ejercicio 4 /////////////////////////////*/
    btn_result_4.addEventListener("click", function () {
        contarAs(text)
    })
    /*////////////////////  Ejercicio 4 /////////////////////////////*/
    /*////////////////////  Ejercicio 5 /////////////////////////////*/
    btn_5.addEventListener("click", function () {
        calculaPrecioProducto(precio)
    })
    /*////////////////////  Ejercicio 5 /////////////////////////////*/


}

init();