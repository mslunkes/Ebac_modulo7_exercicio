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
        document.querySelector(".sucess-message").style.display = "none";
    } else {
        const mensagemSucesso = `O número ${campoB} é maior que ${campoA}`
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.textContent = mensagemSucesso
        containerMensagemSucesso.style.display = 'block';
        
        document.querySelector('.error-message').style.display="none"
    }
}