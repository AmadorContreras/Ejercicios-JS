/*////////////////////  Ejercicio 4 /////////////////////////////*/
let text = document.querySelector('#text');
const result = document.querySelector('#resultado');
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


function init() {
    /*////////////////////  Ejercicio 4 /////////////////////////////*/
    btn_result_4.addEventListener("click", function () {
        contarAs(text)
    })
    /*////////////////////  Ejercicio 4 /////////////////////////////*/
    /*////////////////////  Ejercicio 5 /////////////////////////////*/


    /*////////////////////  Ejercicio 5 /////////////////////////////*/


}

init();