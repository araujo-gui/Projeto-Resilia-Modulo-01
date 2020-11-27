class CadastroController {
    
    constructor(){

    }

    autoComplete() {
        
        let cep = document.querySelector("#inputZip").value;
        
        let cadastroModel = new CadastroModel();
        respon = cadastroModel.buscar(cep);
        
        let cadastroView = new CadastroView();

        cadastroView.addEndereco(cadastroModel.endereco);
        cadastroView.addBairro(cadastroModel.bairro);
        cadastroView.addCidade(cadastroModel.cidade);
        cadastroView.addUf(cadastroModel.uf);
    }
}




let cadastroController = new CadastroController();