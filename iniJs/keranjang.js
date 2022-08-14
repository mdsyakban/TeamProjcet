// let buttonKeranjang = document.getElementById("btn-keranjang")
let containerCartSayur = document.getElementById('container-cartSayur')
let cartSayur = JSON.parse(localStorage.getItem('cart-sayur'))

let containerCartBuah = document.getElementById('container-cartBuah')
let cartBuah = JSON.parse(localStorage.getItem('cart-buah'))
// console.log(cartSayur);

// buttonKeranjang.addEventListener("onclick", displayDate);
// function displayDate() {
    
// }

cartSayur.forEach(sayur => {
  // console.log('lagi looping')
  containerCartSayur.innerHTML += `
    <div class="card rounded-3 mb-4" id="keranjang">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src=${sayur.photo}
                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-2">${sayur.name}</p>
                  <p><span class="text-muted">Stok: </span>${sayur.stok}
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="btn btn-link px-2" id="minus"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="bi bi-dash"></i>
                  </button>
  
                  <input id="formsayur" min="1" name="quantity" value="1" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-2" id="plus" 
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1" id="value-${sayur.id}">
                  <h5 class="mb-0">${sayur.harga}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button type="button" class="btn btn-danger" id="buttonHapus"><i class="bi bi-trash-fill"></i></button>
                </div>
              </div>
            </div>
          </div>
  `

  //Hapus Local Storage
  let hapusButton = document.querySelector('#buttonHapus');
  let hapusSayur = document.querySelector('#keranjang');

  hapusButton.onclick = function () {
    alert("Data Sudah dihapus");
    hapusSayur.remove();
    const items = JSON.parse(localStorage.getItem("cart-sayur"));
    const filtered = items.filter((item) => item.id !== sayur.id);
    localStorage.setItem("cart-sayur", JSON.stringify(filtered));
    refresh();

  function refresh() {
    window.location.reload();
  }
} 
})

//CARD BUAH

cartBuah.forEach(buah => {
  // console.log('lagi looping')
  containerCartBuah.innerHTML += `
    <div class="card rounded-3 mb-4" id="keranjangBuah">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src=${buah.photo}
                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-2">${buah.name}</p>
                  <p><span class="text-muted">Stok: </span>${buah.stok}
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
                  <h5 class="mb-0">Rp. ${buah.harga}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          
                <button type="button" class="btn btn-danger" id="buttonHapusBuah"><i class="bi bi-trash-fill"></i></button>
                </div>
              </div>
            </div>
          </div>
  `
//Hapus Local Storage
let hapusButtonBuah = document.querySelector('#buttonHapusBuah');
let hapusBuah = document.querySelector('#keranjangBuah');

hapusButtonBuah.onclick = function () {
  alert("Data Sudah dihapus");
  hapusBuah.remove();
  const items = JSON.parse(localStorage.getItem("cart-buah"));
  const filtered = items.filter((item) => item.id !== buah.id);
  localStorage.setItem("cart-buah", JSON.stringify(filtered));
  refresh();

function refresh() {
  window.location.reload();
}
} 

})
