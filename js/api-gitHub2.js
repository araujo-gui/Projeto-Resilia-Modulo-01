const img1 = document.getElementById('img-1');
const name1 = document.getElementById('name-1');
const gitprofile1 = document.getElementById('git-profile-1');

  //Controller
  class UserController {
    constructor() { }
    
    adicionaUsuario(NomeUsuario) {
      console.log('adicionando user...!');
      
      let user = new UserModel();
      user.buscaUsuario(NomeUsuario);
    
      let view = new UserView();
      view.render(user);
      }
  }

  //Model
  class UserModel {
    
    constructor() {
      this._nome = '';
      this._imagem = '';
      this._url = '';
    }

    buscaUsuario(NomeUsuario) {
      //request
      let pedido = new XMLHttpRequest();

      pedido.addEventListener('load', () => {
        if (pedido.status == 200) {
          
          let dados = this._processaResponse(pedido.responseText);
        }
      });
  
      pedido.open('GET', `https://api.github.com/users/${NomeUsuario}`, false);
  
      pedido.send();
  
    }
    _processaResponse(responseText) {
  
      let response = JSON.parse(responseText);
      console.log(response)
      return response;
    }
  
    _atualiza(dados) {
      this._nome = dados.name;
      this._imagem = dados.avatar_url;
      this._url = dados.html_url;
    }
   
    getNome() {
      return this._nome;
    }
   
    getImagem() {
      return this._imagem;
    }
  
    getUrl() {
      return this._url;
    }
  
  }

  //View
  class UserView {
     
    constructor() { }
     
    render(model) {
      console.log('View:Recebi o usuário e vou criar uma visualização');
      console.log(model.getImagem())
      img1.src = model.getImagem();
      name1.textContent = model.getNome();
      gitprofile1.href = model.getUrl();
      
    }
  }
  
  let controller = new UserController();

  let btn = document.getElementById("buscar")
  
  btn.addEventListener("click",function(event)
  {event.preventDefault(),controller.adicionaUsuario('viniciusalmeidas')});

  // window.addEventListener("load", controller.adicionaUsuario('viniciusalmeidas', 1));


  
