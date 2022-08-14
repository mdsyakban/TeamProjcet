// let buttonKeranjang = document.getElementById("btn-keranjang")
let containerCartSayur = document.getElementById('container-cartSayur')
let cartSayur = JSON.parse(localStorage.getItem('cart-sayur'))

let containerCartBuah = document.getElementById('container-cartBuah')
let cartBuah = JSON.parse(localStorage.getItem('cart-buah'))

const subtotalCount = () => {
  let subtotal = 0
  let eachTotal = document.querySelectorAll('.sub-total')
  let listTotal = document.getElementById('subtotal')
  eachTotal.forEach(subTotal  => {
    subtotal += Number(subTotal.textContent)
  })
  listTotal.textContent = subtotal
}
// buttonKeranjang.addEventListener("onclick", displayDate);
// function displayDate() {
    
// }

const convert = (arr) => {
  const res = {};
  arr.forEach((obj) => {
    const key = `${obj.id}`;
    if (!res[key]) {
      res[key] = { ...obj, count: 0 };
    }
    res[key].count += 1;
  });
  return Object.values(res);
};

let reduceSayur = convert(cartSayur)

console.log(reduceSayur);

reduceSayur.forEach(sayur => {
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
                  <button class="btn btn-link px-2" id="minus" name="value-${sayur.id}"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="bi bi-dash"></i>
                  </button>
  
                  <input id="formsayur" min="1" name="quantity" value="${sayur.count}" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-2" id="plus" name="value-${sayur.id}"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1" id="value-${sayur.id}">
                  <span>Rp. </span><h5 class="mb-0 total-rincianbarang sub-total" id="value-${sayur.id}_${sayur.harga}">${sayur.harga}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button type="button" class="btn btn-danger" id="buttonHapus"><i class="bi bi-trash-fill"></i></button>
                </div>
              </div>
            </div>
          </div>
  `
  let plusbutton = document.querySelectorAll(`#plus`);
  let minusbutton = document.querySelectorAll("#minus");
  let totalHargaSayur = document.querySelectorAll(".total-rincianbarang");

  plusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.total-rincianbarang`);
      quantityFind.forEach((quantity) => {
        if (quantity.name === element.name) {
          quantity.value = Number(quantity.value) + 1;
          totalHarga = [];
        }
      });
      totalHargaSayur.forEach((total) => {
        if (total.id.split("_")[0] === element.name) {
          total.textContent = Number(total.textContent) + Number(total.id.split("_")[1]);
        }
        subtotalCount()
      });
    });
  });

  minusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.total-rincianbarang`);
      quantityFind.forEach((quantity) => {
        if (quantity.name === element.name) {
          quantity.value = Number(quantity.value) - 1;
          totalHarga = [];
        }
      });
      totalHargaSayur.forEach((total) => {
        if (total.id.split("_")[0] === element.name) {
          total.textContent = Number(total.textContent) - Number(total.id.split("_")[1]);
        }
      });
      subtotalCount()
    });
  });

  

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
  subtotalCount() 
}
})

//CARD BUAH

let reduceBuah = convert(cartBuah)

reduceBuah.forEach(buah => {
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
                  <button class="btn btn-link px-2 minusBuah" name="value-${buah.id}"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="bi bi-dash"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="${buah.count}" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-2 plusBuah" name="value-${buah.id}"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <span>Rp. </span> <h5 class="mb-0 total-rincianbarangBuah sub-total" id="value-${buah.id}_${buah.harga}">${buah.harga}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          
                <button type="button" class="btn btn-danger" id="buttonHapusBuah"><i class="bi bi-trash-fill"></i></button>
                </div>
              </div>
            </div>
          </div>
  `

  let plusbutton = document.querySelectorAll(`.plusBuah`);
  let minusbutton = document.querySelectorAll(".minusBuah");
  let totalHargaBuah = document.querySelectorAll(".total-rincianbarangBuah");

  plusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.total-rincianbarang`);
      quantityFind.forEach((quantity) => {
        if (quantity.name === element.name) {
          quantity.value = Number(quantity.value) + 1;
          totalHarga = [];
        }
      });
      totalHargaBuah.forEach((total) => {
        if (total.id.split("_")[0] === element.name) {
          total.textContent = Number(total.textContent) + Number(total.id.split("_")[1]);
        }
        subtotalCount()
      });
    });
  });

  minusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.total-rincianbarang`);
      quantityFind.forEach((quantity) => {
        if (quantity.name === element.name) {
          quantity.value = Number(quantity.value) - 1;
          totalHarga = [];
        }
      });
      totalHargaBuah.forEach((total) => {
        if (total.id.split("_")[0] === element.name) {
          total.textContent = Number(total.textContent) - Number(total.id.split("_")[1]);
        }
        subtotalCount()
      });
    });
  });
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
subtotalCount() 
})


let array = [];
let array1 = [];
let dataHarga = [];
datakuantitiy = [];
datakuantitiy1 = [];
namanama = [];

let jumlah = document.getElementById("jumlahbarangsemua");
let total = document.getElementById("totalpembayaransemua");

// let jumlahSayur = parseInt(document.getElementById("jumlahbarang").innerHTML);
// let jumlahBuah = parseInt(document.getElementById("jumlahbarang1").innerHTML);

// let totalsayur = parseInt(document.getElementById("totalpembayaran").innerHTML);
// let totalbuah = parseInt(document.getElementById("totalpembayaran1").innerHTML);

// console.log(totalbuah);

// jumlah.textContent = jumlahSayur + jumlahBuah;
// total.textContent = totalsayur + totalbuah;

// let tombol = document.getElementById("tombol");
// let jumlah1 = parseInt(document.getElementById("jumlahbarangsemua").innerHTML);
// let total1 = parseInt(document.getElementById("totalpembayaransemua").innerHTML);

// tombol.addEventListener("click", (e) => {
//   let TotalHarga = {
//     Key: "0",
//     harga: total1,
//     jumlah: jumlah1,
//   };
//   dataHarga.push(TotalHarga);
//   localStorage.setItem("totalharga", JSON.stringify(dataHarga));
// });
