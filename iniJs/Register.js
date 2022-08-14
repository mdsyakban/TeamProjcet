let hasilRegister = []

let register = document.querySelector("#register")
console.log(register)

register.addEventListener("click", (e) => {
    e.preventDefault()

    let emailRegister = document.getElementById("emailRegister").value;
    let usernameRegister = document.getElementById("usernameRegister").value;
    let passwordRegister = document.getElementById("passwordRegister").value;

    // console.log(emailRegister)
    // alert("Berhasil Register")
    // simpanDataRegister()

    let email=false, username=false, password=false;
    if (emailRegister === '') {
        document.getElementById("emailError").innerHTML = 'Tidak Boleh Kosong' ;
    } else {
        document.getElementById("emailError").innerHTML = '' ;
        emailRegister=true;
    }

    if (usernameRegister === '') {
        document.getElementById("usernameError").innerHTML = 'Tidak Boleh Kosong' ;
    } else {
        document.getElementById("usernameError").innerHTML = '' ;
        usernameRegister=true;
    }

    if (passwordRegister === '') {
        document.getElementById("passwordError").innerHTML = 'Tidak Boleh Kosong' ;
    } else {
        document.getElementById("passwordError").innerHTML = '' ;
        passwordRegister=true;
    }

    if (email ==! '' && username ==! '' && password ==! '') {
        alert("Login berhasil")
    } else {
        alert("Login gagal")
    }

    // console.log(emailRegister)
    // alert("Berhasil Register")
    simpanDataRegister()
})

function simpanDataRegister() {
        let hasil = {
            Key: "0",
            emailRegister: emailRegister.value,
            usernameRegister: usernameRegister.value,
            passwordRegister: passwordRegister.value,
        };
        hasilRegister.push(hasil);
        console.log(hasilRegister)

        let dataRegister = JSON.stringify(hasilRegister);

        localStorage.setItem("dataRegister", dataRegister);
    }
    