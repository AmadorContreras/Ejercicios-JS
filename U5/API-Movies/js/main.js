const cards = document.querySelector('#cards');

let pelis = [];


async function getMovies() {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-ES");
    const data = await res.json();


    cards.innerHTML = "";
    data.results.forEach(movie => {
        
        cards.innerHTML += `
        <div class="card">
                <div class="img"></div>
                <div class="title-movie">${movie.title}</div>
        </div>
        `;
    });

}
/*
const getMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-ES")
        .then(res => res.json())
        .then(data => {
            pelis = data
            renderCard(pelis)
            console.log(data);
        })
        .then(error => {
            console.log(error);
        }
        );
};
*/


// function renderCard(element) {
//     cards.innerHTML = "";
//     element.forEach(e => {
//         tablaNueva = `
//         <div class="card">
//                 <div class="img"></div>
//                 <div class="title-movie"></div>
//         </div>
//         `;
//     });
//     cards.innerHTML += tablaNueva;
// }

function init() {
    getMovies();
}

init();