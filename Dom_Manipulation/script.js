// script.js
document.getElementById('addProduct').addEventListener('click', addProduct);

let products = [];

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && price && rating) {
        const product = { name, price, rating };
        products.push(product);

        displayGraphs();
    }
}

function displayGraphs() {
    displayPriceGraph();
    displayRatingGraph();
}

function displayPriceGraph() {
    const priceGraph = document.getElementById('priceGraph');
    priceGraph.innerHTML = '';

    products.sort((a, b) => b.price - a.price);

    products.forEach(product => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = product.price * 2 + 'px';
        bar.innerHTML = `${product.name} <br> $${product.price}`;
        priceGraph.appendChild(bar);
    });
}

function displayRatingGraph() {
    const ratingGraph = document.getElementById('ratingGraph');
    ratingGraph.innerHTML = '';

    products.sort((a, b) => b.rating - a.rating);

    products.forEach(product => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = product.rating * 40 + 'px';
        bar.innerHTML = `${product.name} <br> ${product.rating}/5`;
        ratingGraph.appendChild(bar);
    });
}
