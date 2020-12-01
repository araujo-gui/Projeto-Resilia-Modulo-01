const img1 = document.getElementById('img-1');
const name1 = document.getElementById('name-1')
const gitprofile1 = document.getElementById('git-profile-1');

const img2 = document.getElementById('img-2');
const name2 = document.getElementById('name-2')
const gitprofile2 = document.getElementById('git-profile-2');

const img3 = document.getElementById('img-3');
const name3 = document.getElementById('name-3')
const gitprofile3 = document.getElementById('git-profile-3');

const img4 = document.getElementById('img-4');
const name4 = document.getElementById('name-4')
const gitprofile4 = document.getElementById('git-profile-4');

const img5 = document.getElementById('img-5');
const name5 = document.getElementById('name-5')
const gitprofile5 = document.getElementById('git-profile-5');


  //Controller
  class UserController {
    constructor() { }
    
    adicionaUsuario(NomeUsuario,n) {
      
      let user = new UserModel();
      user.buscaUsuario(NomeUsuario);
    
      let view = new UserView();
      view.render(user,n);
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
          this._atualiza(dados);
        }
      });
  
      pedido.open('GET', `https://api.github.com/users/${NomeUsuario}`, false);
  
      pedido.send();
  
    }
    _processaResponse(responseText) {
  
      let response = JSON.parse(responseText);
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
     
    render(model,n) {
      if (n==1){
        img1.src = model.getImagem();
        name1.textContent = model.getNome();
        gitprofile1.href = model.getUrl();
      }
      if (n==2){
        img2.src = model.getImagem();
        name2.textContent = model.getNome();
        gitprofile2.href = model.getUrl();
      }
      if (n==3){
        img3.src = model.getImagem();
        name3.textContent = model.getNome();
        gitprofile3.href = model.getUrl();
      }
      if (n==4){
        img4.src = model.getImagem();
        name4.textContent = model.getNome();
        gitprofile4.href = model.getUrl();
      }
      if (n==5){
        img5.src = model.getImagem();
        name5.textContent = model.getNome();
        gitprofile5.href = model.getUrl();
      }



    }
  }
 
  let controller = new UserController();

  window.addEventListener("load", (e) =>
  {e.preventDefault(), controller.adicionaUsuario('Dbasilio-dev',1),controller.adicionaUsuario('fernandaturbay',2),controller.adicionaUsuario('araujo-gui',3),controller.adicionaUsuario('LaDespistada1981',4),controller.adicionaUsuario('viniciusalmeidas',5)});


  
