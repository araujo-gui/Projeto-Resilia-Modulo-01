class CadastroController {
    
    constructor(){

    }

    autoComplete() {
        
        let cep = document.querySelector("#inputZip").value;
        
        let cadastroModel = new CadastroModel();
        cadastroModel.buscar(cep);
        
        let cadastroView = new CadastroView();

        cadastroView.addEndereco(cadastroModel.endereco);
        cadastroView.addBairro(cadastroModel.bairro);
        cadastroView.addCidade(cadastroModel.cidade);
        cadastroView.addUf(cadastroModel.uf);
    }

    completeReg(event) {
        
        event.preventDefault();

        let cadastroView = new CadastroView();
        cadastroView.removeError();

        let inputUf = document.querySelector("#inputState")
        let cepInput = document.querySelector("#inputZip");
        
        if(cepInput.value.length == 8) {
            if(inputUf.value != ""){ 
                cadastroView.success();
            }
        } else {
            cadastroView.error();
        }

        cadastroView.zeraForm();
    }

    completeSenha(event) {

        event.preventDefault();
    }

    resetMsg() {
        
        document.querySelector("#success").classList.add("invisibleGreen");
        document.querySelector("#error").classList.add("invisibleRed");
    }

    
}


let cadastroController = new CadastroController();