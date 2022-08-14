let HasilLogin = []

let masuk = document.querySelector("#masuk")
console.log(masuk)
masuk.addEventListener("click", (e) => {
    e.preventDefault()

    let nama = document.getElementById("nama").value
    let password = document.getElementById("password").value

    console.log(nama)
    

    alert("berhasil Login")
    simpanData()
})
function simpanData() {
  

        let hasil = {
            Key: "0",
            nama: nama.value,
            Password: password.value,
        };
        HasilLogin.push(hasil);
        console.log(HasilLogin)
        let Login = JSON.stringify(HasilLogin);
        localStorage.setItem("login", Login);
    }