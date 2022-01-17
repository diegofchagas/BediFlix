function mostraFilmes(){
    const chave = "772289e9"
    let filme = $("#busca").val()
    console.log(filme)
$.ajax({

    url: `https://www.omdbapi.com/?apikey=${chave}&t=${filme}`,
    type: "GET",
    success: function(response){
        try {   if(response.Title !== undefined){
            console.log(response)
            $('.principal').css('display', 'none')
            $('#infoFilme').css('display', 'flex')
            $("#tituloFilme").html(response.Title)
            $("#diretor").html(response.Director)
            $("#ano").html( response.Year)
            $("#duracao").html( response.Runtime)
            $('#historia').html(response.Plot)
            $("#poster").html(`<img src="${response.Poster}">`)

           
        } else {
            throw new Error("Filme não encontrado!")
        }
            
        } catch (error) {
           erroFilme(error)
        }
      
        
    }
    
})

}


function erroFilme(error){
    $('.principal').css('display', 'none')
    $('#infoFilme').css('display', 'flex')
    $('#tituloFilme').html(`${error}`)
}