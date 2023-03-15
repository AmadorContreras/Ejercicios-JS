const num1 = document.querySelector("#numero1");
const num2 = document.querySelector("#numero2");

const btnTotal = document.querySelector("#btn");
let resulFinal = document.querySelector("#result");

function mayorMenor(num1, num2) {
    let d1 = Number(num1.value);
    let d2 = Number(num2.value);
    if (d1 > d2) {
        resulFinal.innerHTML = ` ${d1} es mayor que ${d2} `;
    }
    else if (d1 < d2) {
        resulFinal.innerHTML = ` ${d1} es menor que ${d2} `;
    }
    else {
        resulFinal.innerHTML = ` ${d1} y ${d2} son iguales `;
    }

}

function init() {
    btnTotal.addEventListener("click", function () {
        mayorMenor(num1, num2);
    });
}

init();
