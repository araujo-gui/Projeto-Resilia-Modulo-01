let botao = document.querySelector('#botao-busca')
let input = document.querySelector('#busca-filmes')
let posterFilme = document.querySelector('#poster')
let tituloFilme = document.querySelector('#title')
let anoLancamentoFilme = document.querySelector('#year')
let dataLancamentoFilme = document.querySelector('#realeased')
let generoFilme = document.querySelector('#genre')
let diretorFilme = document.querySelector('#director')
let elencoFilme = document.querySelector('#actors')
let sinopseFilme = document.querySelector('#plot')

botao.addEventListener('click', (e)=>
{
    e.preventDefault();
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
        console.log(dados)
        posterFilme.src = dados.Poster;
        tituloFilme.textContent = dados.Title;
        anoLancamentoFilme.textContent = dados.Year;
        dataLancamentoFilme.textContent = dados.Released;
        generoFilme.textContent = dados.Genre;
        diretorFilme.textContent = dados.Director;
        elencoFilme.textContent = dados.Actors;
        sinopseFilme.textContent = dados.Plot;
    }
}



class Controller
{
    constructor(){}

    static carregaInfos(t)
    {
        let pedido = new XMLHttpRequest()
        
        pedido.open('GET', `http://www.omdbapi.com/?t=${t}&apikey=6ee6dc4`, false)
        
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

