let HasilLogin = []

let masuk = document.querySelector("#masuk")
console.log(masuk)
masuk.addEventListener("click", (e) => {
    e.preventDefault()

    let nama = document.getElementById("nama").value
    let password = document.getElementById("password").value

    let inputUsername=false, inputPassword=false; 
    if(nama === '') {
        document.getElementById("username-error").innerHTML = 'Tidak Boleh Kosong';
    }else {
        document.getElementById("username-error").innerHTML = '';
        inputUsername=true;
    }

    if(password === '') {
        document.getElementById("password-error").innerHTML = 'Tidak Boleh Kosong';
    }else {
        document.getElementById("password-error").innerHTML = '';
        inputPassword=true;
    }

    if (inputUsername ==! '' && inputPassword ==! '') {
        alert("Login berhasil")
    } else {
        alert("Login gagal")
    }

    // console.log(nama)
    

    // alert("berhasil Login")
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