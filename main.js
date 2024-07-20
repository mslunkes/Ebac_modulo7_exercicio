const form = document.getElementById("form-deposito")


form.addEventListener("submit", function (e) {
    e.preventDefault();
    validarNumero()

})

function validarNumero(){
    const campoA = parseFloat(document.getElementById("campo-A").value)
    const campoB = parseFloat(document.getElementById("campo-B").value)
    

    if (campoA >= campoB){
        document.querySelector(".error-message").style.display = "block"
        document.querySelector(".success-message").style.display = "none";
    } else {
        const mensagemSucesso = `O número ${campoB.value} é maior que ${campoA.value}`
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.textContent = mensagemSucesso
        containerMensagemSucesso.style.display = 'block';
        
        document.querySelector('.error-message').style.display="none"
    }
}