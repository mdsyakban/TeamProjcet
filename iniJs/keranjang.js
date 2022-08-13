// let buttonKeranjang = document.getElementById("btn-keranjang")
let containerCartSayur = document.getElementById('container-cartSayur')

let containerCartBuah = document.getElementById('container-cartBuah')

let cartSayur = JSON.parse(localStorage.getItem('cart-sayur'))

let cartBuah = JSON.parse(localStorage.getItem('cart-buah'))
// console.log(cartSayur);

// buttonKeranjang.addEventListener("onclick", displayDate);
// function displayDate() {
    
// }

cartSayur.forEach(cart => {
  // console.log('lagi looping')
  containerCartSayur.innerHTML += `
    <div class="card rounded-3 mb-4" id="btn-keranjang">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src=${cart.photo}
                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-2">${cart.name}</p>
                  <p><span class="text-muted">Stok: </span>${cart.stok}
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="bi bi-dash"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="1" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0">Rp. ${cart.harga}(8)</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                </div>
              </div>
            </div>
          </div>
  `
})

//CARD BUAH

cartBuah.forEach(cart => {
  // console.log('lagi looping')
  containerCartBuah.innerHTML += `
    <div class="card rounded-3 mb-4" id="btn-keranjang">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src=${cart.photo}
                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-2">${cart.name}</p>
                  <p><span class="text-muted">Stok: </span>${cart.stok}
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="bi bi-dash"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="1" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0">Rp. ${cart.harga}(8)</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          
                <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                </div>
              </div>
            </div>
          </div>
  `
})

let hapusIconKeranjang = document.getElementsByClassName('btn-danger')
// console.log(hapusIconKeranjang)

for (var i = 0; i < hapusIconKeranjang.length; i++) {
    var button = hapusIconKeranjang[i]
    button.addEventListener('click', function(event) {
        // console.log('clicked')
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    })
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('btn-keranjang')[0]
    let cartRows = cartItemContainer.getElementsByClassName('card-body')
    for (var i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('card-price')[0]
        let quantityElement = cartRow.getElementsByClassName('form1')[0]

        console.log(priceElement, quantityElement)
    }
}