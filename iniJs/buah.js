let cardContainer = document.getElementById("container-card")

console.log(cardContainer);

fetch('https://childish-jumpy-kitten.glitch.me/buah')
.then((response) => response.json())
.then((data) => {
    console.log(data)
    data.forEach(element => {
        cardContainer.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3 py-3">
            <div class="card" >
            <img src=${element.photo} class="card-img-top" alt=${element.name}>
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">Harga : ${element.harga} (kg)</p>
            <p class="stok">Stok: ${element.stok}</p>
            <a href="#" class="col-12 btn btn-success button">+Keranjang</a>
            <a href="#" class="col-12 btn btn-success button">Beli Langsung</a>
            </div>
            </div>
        </div>
        `
    });
});