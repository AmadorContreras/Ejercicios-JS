const num1 = document.querySelector('#numero1');
const num2 = document.querySelector('#numero2');

const buttonTotal = document.querySelector('#btn');
let resulFinal  = document.querySelector('#result');



function media(num1,num2) {
    let d1 = Number(num1.value);
    let d2 = Number(num2.value);
    let media = (d1 + d2)/2;

    // este cambio
    document.getElementById('result').innerHTML = media;
}



function init(){

    buttonTotal.addEventListener('click',function()
    {media(num1, num2)}
    );
}

init();