
let envio = document.getElementById("enviar")

envio.addEventListener("click", function(e){
e.preventDefault()
let email = document.getElementById("email").value


if(email.indexOf("@") > -1) {

    $("#titulo").html(" Um email foi enviado para recuperação da senha!")
    $("#titulo").css("color", "blue");
} else {
    $("#titulo").html(" Email inválido, digite o email corretamente!")
    $("#titulo").css("color", "red");
}

})