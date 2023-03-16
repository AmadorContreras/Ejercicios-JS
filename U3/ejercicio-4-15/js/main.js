


function contarAs(texto) {
    let contador = 0;
    for (var i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == 'a' || texto.charAt(i) == 'A') {
            contador = contador + 1;
        }
    }
    return contador;
}

let textoNoticia = "El coranavirus ya tiene vacuna";
console.log("1-Número de as:", contarAs(textoNoticia));

let textoNoticia2 = "El coranavirus ya tiene vacuna, la llamada VACCUR";
console.log("2-Número de as:", contarAs(textoNoticia2));

function init() {
    contarAs(1);
}

init();