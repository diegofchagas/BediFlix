function filmes(filme){
    const chave = "772289e9"
    console.log(filme)
$.ajax({

    url: `https://www.omdbapi.com/?apikey=${chave}&t=${filme}`,
    type: "GET",
    success: function(response){
        console.log(response)
        $('.principal').css('display', 'none')
        $('#infoFilme').css('display', 'flex')
        $("#tituloFilme").html(response.Title)
        $("#diretor").html(response.Director)
        $("#ano").html( response.Year)
        $("#duracao").html( response.Runtime)
        $('#historia').html(response.Plot)
        $("#poster").html(`<img src="${response.Poster}">`)
        // $("#poster").attr("src", response.Poster)

    }

})

}


function erroFilme(error){
    $('.principal').css('display', 'none')
    $('#infoFilme').css('display', 'flex')
    $('#tituloFilme').html(`${error}`)
}