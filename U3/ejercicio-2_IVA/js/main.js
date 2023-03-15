const num1 = document.querySelector("#numero1");
const iva = document.querySelector("#iva");

const btnTotal = document.querySelector("#btn");
let resulFinal = document.querySelector("#result");

function calcularIVA(num1, num2) {
    let d1 = Number(num1.value);
    let d2 = Number(num2.value);
    let IVA = d1 * (d2 / 100);

    resulFinal.innerHTML = `El IVA de ${d1}€ es: ${IVA}€ `;
}

function init() {
    btnTotal.addEventListener("click", function () {
        calcularIVA(num1, iva);
    });
}

init();
