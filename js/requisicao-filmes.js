let botao = document.getElementById('botao-busca')
let input = document.getElementById('busca-filmes')
let posterFilme = document.getElementById('poster')
let tituloFilme = document.getElementById('titleModal')
let anoLancamentoFilme = document.getElementById('year')
let dataLancamentoFilme = document.getElementById('realeased')
let generoFilme = document.getElementById('genre')
let diretorFilme = document.getElementById('director')
let elencoFilme = document.getElementById('actors')
let sinopseFilme = document.getElementById('plot')
let itens = document.querySelectorAll('.img-carrossel')


itens.forEach(item =>{

    item.addEventListener('click', (e)=>{
    e.preventDefault();
    $("#buscaModal").modal()
    let name = item.name
    Controller.carregaInfos(name)
    });

})


botao.addEventListener('click', (e)=>{
    e.preventDefault();
    $("#buscaModal").modal();
    Controller.carregaInfos(input.value)
})


class Model
{
    constructor()
    {
        this.poster = '';
        this.titulo = '';
        this.ano = '';
        this.dateLancamento = '';
        this.genero = '';
        this.diretor = '';
        this.elenco = '';
        this.sinopse = '';
    }
}

class View
{
    constructor(){}
    
    static carregaPagina( dados )
    {
        // console.log(dados)
        posterFilme.src = dados.Poster;
        tituloFilme.textContent = dados.Title;
        anoLancamentoFilme.textContent = `Ano de lançamento: ${dados.Year}`;
        dataLancamentoFilme.textContent = `Data de estreia: ${dados.Released}`;
        generoFilme.textContent = `Gênero: ${dados.Genre}`;
        diretorFilme.textContent = `Direção: ${dados.Director}`;
        elencoFilme.textContent = `Elenco: ${dados.Actors}`;
        sinopseFilme.textContent = `Sinopse: ${dados.Plot}`;
    }
}


class Controller
{
    constructor(){}

    static carregaInfos(t)
    {
        let pedido = new XMLHttpRequest()
        
        pedido.open('GET', `https://www.omdbapi.com/?t=${t}&apikey=6ee6dc4`, false)
        
        pedido.addEventListener('load', ()=> 
        {
            if( pedido.status == 200)
            {
                let dados = JSON.parse(pedido.responseText)
                // console.log(dados)
                View.carregaPagina(dados)
            }
          
        })

        pedido.send()
    }
    
};