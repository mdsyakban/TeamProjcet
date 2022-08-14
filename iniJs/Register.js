let hasilRegister = []

let register = document.querySelector("#register")
console.log(register)

register.addEventListener("click", (e) => {
    e.preventDefault()

    let emailRegister = document.getElementById("emailRegister").value;
    let usernameRegister = document.getElementById("usernameRegister").value;
    let passwordRegister = document.getElementById("passwordRegister").value;

    console.log(emailRegister)
    alert("Berhasil Register")
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
    