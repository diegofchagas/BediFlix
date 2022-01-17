let entrar = document.getElementById('entrar')
entrar.addEventListener('click', function(){
    return location = ('../index.html');
})

let inscrever = document.getElementById('inscrever')
inscrever.addEventListener('click', function(){
    return location = ('./login.html');
})


const dadosUsuario = () => {
    localStorage.setItem('email', usuario);
}
const dadosUsuario2 = () => {
    localStorage.setItem('senha', password);
}
const dadosUsuario3 = () => {
    localStorage.setItem('nome', nomeInput);
}


let nome = document.getElementById('InputName')
let email = document.getElementById('InputEmail')
let cadastro = document.getElementById('login')
var usuario
let senha = document.getElementById('password')
var password 
var nomeInput

cadastro.addEventListener('change', ()=>{
    nomeInput = nome.value
    usuario = email.value
    password = senha.value
    dadosUsuario()
    dadosUsuario2()
    dadosUsuario3()
})

$('#Cep').on('change', async function(){
    let cep = document.getElementById('Cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    let api = await fetch(url).then(response => response.json());
    console.log(api)
    cadastroCompleto(api)
   
 })

$("#enviar").click(function(){
    try{
        if(usuario.indexOf('@') > -1 && password.length > 5){
        
            cadastroConcluido()
        } else {
            throw new Error ('Dados incorretos')
        }
    } catch(error){
        erro(error)
    }
    
});
