function buscaCep(cep){
    
    const url = `https://viacep.com.br/ws/${cep}/json/`
    let api = await fetch(url).then(response => response.json());
    return api
}