

function cargarJSON() {
    fetch('./data/ejercicio-3/peliculas.json')
    .then(respuesta => respuesta.json())
    .then(function (data) {
        renderCards(data);
    })
    .catch(error => {
        console.log(error);
    }
    );
}

const renderCards = (data) => {
    const cards = document.querySelector('#cards');
    cards.innerHTML = "";
    console.log(data);
}



function init() {
    cargarJSON();
}

init();

