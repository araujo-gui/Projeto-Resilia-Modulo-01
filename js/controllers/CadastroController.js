class CadastroController {
    
    constructor(){

    }

    autoComplete() {
        
        let cep = document.querySelector("#inputZip").value;
        
        let cadastroModel = new CadastroModel();

        cadastroModel.buscar(cep);

    }
}




let cadastroController = new CadastroController();