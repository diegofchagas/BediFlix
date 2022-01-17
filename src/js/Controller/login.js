let acessar = document.getElementById('acessar')
acessar.addEventListener('click', function(){
    return location = ('../index.html');
})

let cadastro = document.getElementById('cadastrar')
cadastro.addEventListener('click', function(){
    return location = ('../html/cadastro.html');
})


let login
let senha
let input

const load = () => {
    const email = localStorage.getItem('email');
    login = email
    const password = localStorage.getItem('senha')
    senha = password
    const nome = localStorage.getItem('nome')
    input = nome
} 
window.onload = () => {
    load();
}

const botao = document.getElementById('entrar')
botao.addEventListener('click',()=>{
    
    let inputLogin = document.getElementById('InputEmail').value 
    let inputPassword = document.getElementById('InputPassword').value
    try {

        if(login == inputLogin && senha == inputPassword){

            return location = ("../html/filmes.html")
        } else {
            throw new Error ('Login e Senha inválidos, tente novamente')
        }
    } catch (error){
        $('#titulo').html(`${error}`)
    }
})