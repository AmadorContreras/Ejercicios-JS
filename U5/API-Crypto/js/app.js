const mainContainer = document.querySelector("#main-container");

async function getCoins() {
    const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    try {
        // con await no salta a la siguiente linea hasta que acaba
        const res = await fetch(url);
        const data = await res.json();
        renderCoins();
    } catch (error) {
        console.log(error);
    }
}

function renderCoins(list) {
    mainContainer.innerHTML = `
    <div>#</div>
    <div>Name</div>
    <div>Price</div>
    `;
    list.forEach((coin, index) => {
        mainContainer.innerHTML += `
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        `;
    });
}

function init() {
    getCoins();
}

init();
