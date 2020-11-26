let header = document.querySelector('#header')

header.innerHTML = (`
    <div id="navBar">
    <nav class="navbar navbar-expand-lg navbar-light cor-destaque fixed-top">
        <a class="navbar-brand"  href="#"><img class="logo" src="./img/logo.png" alt="" srcset=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon iconeBotao"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav itens-menu">
                <a class="nav-link" href="./index.html"><h5 class="menu">Inicio</h5><span class="sr-only">(current)</span></a>
                <a class="nav-link" data-toggle="modal" data-target="#modal-login" href="#"><h5 class="menu">Login</h5></a>
                <a class="nav-link" href="./contato.html"><h5 class="menu">Contato</h5></a>
                <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
            </div>
            <nav class="navbar navbar-light cor-destaque">
                <form class="form-inline">
                    <input class="form-control mr-sm-2 input" type="search" placeholder="Busca por filme..." aria-label="Search">
                    <button class="btn btn-dark my-2 my-sm-0 botao" type="submit">Buscar</button>
                </form>
            </nav>
        </div>
    </nav>
    </div>
`)

let footer = document.querySelector('#footer')

footer.innerHTML = (`
    <section class="rodape cor-destaque">
    <h5 class="copy">&copy; Copyright by ResiliaFlixTeam 2020</h5>
    <small>
        <ul class="team">
            <li class="lista"><a href="http://github.com/Dbasilio-dev" target="_blank" class="fa fa-github">Daniel Basilio</a></li>
            <li class="lista"><a href="http://github.com/fernandaturbay" target="_blank" class="fa fa-github">Fernanda Turbay</a></li>
            <li class="lista"><a href="http://github.com/araujo-gui" target="_blank" class="fa fa-github">Guilhermina Araújo</a></li>
            <li class="lista"><a href="http://github.com/LaDespistada1981" target="_blank" class="fa fa-github">Roberta Santos</a></li>
            <li class="lista"><a href="http://github.com/viniciusalmeidas" target="_blank" class="fa fa-github">Vinicius Almeida</a></li>
        </ul>
    </small>
    </section>
`)