let cardContainer = document.getElementById("container-card")
let cart = []
const isiLocalStorageCartSayur = localStorage.getItem('cart-sayur')

let addToCart = (id) => {
  let objectSayurLocalStorage = JSON.parse(localStorage.getItem("sayur"))
   // ngambil dari local storage dengan key sayur

   // mencari obj dengan id yang sama
  let foundSayur = objectSayurLocalStorage.find( sayur => {
    return sayur.id === Number(id)
  })

  if (isiLocalStorageCartSayur === null) {
    cart.push(foundSayur)
    localStorage.setItem("cart-sayur", JSON.stringify(cart))
    alert("Berhasil Dimasukkan ke Keranjang")
  } else {
    cart = JSON.parse(isiLocalStorageCartSayur)
    cart.push(foundSayur)
    localStorage.setItem("cart-sayur", JSON.stringify(cart))
    alert("Berhasil Dimasukkan ke Keranjang")
  }
}
fetch('https://childish-jumpy-kitten.glitch.me/sayur')
.then((response) => response.json())
.then((data) => {

    // masukin ke local storage
    localStorage.setItem('sayur', JSON.stringify(data)) 
    data.forEach(element => {
        cardContainer.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3 py-3">
            <div class="card" >
            <img src=${element.photo} class="card-img-top" alt=${element.name}>
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">Harga : ${element.harga} (kg)</p>
            <p class="stok">Stok: ${element.stok}</p>
            <button class="col-12 btn btn-success button btn-keranjang" id=${element.id}>+Keranjang</button>
            <a href="/iniHtml/checkout-transaksi.html" class="col-12 btn btn-success button">Beli Langsung</a>
            </div>
            </div>
        </div> 
        `
    });

    let button_carts = document.querySelectorAll('.btn-keranjang')
    // loping pakek for each
    
    button_carts.forEach(button => {
        button.addEventListener("click", (e) => addToCart(button.id))
    })

});