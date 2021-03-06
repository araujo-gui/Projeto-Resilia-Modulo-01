class CadastroView {
    
    constructor(){

    }

    addEndereco(endereco) {
        
        let inputEndereco = document.querySelector("#inputAddress");
        if(endereco != undefined) {
            inputEndereco.value = endereco;
        } else {
            inputEndereco.value = "";
        }    
        
    }

    addBairro(bairro) {
        
        let inputBairro = document.querySelector("#inputAddress2");
        if(bairro != undefined) {
            inputBairro.value = bairro;
        } else {
            inputBairro.value = "";
        }    
    }

    addCidade(cidade) {

        let inputCidade = document.querySelector("#inputCity");
        if(cidade != undefined) {
            inputCidade.value = cidade;
        } else {
            inputCidade.value = "";
        }
    }

    addUf(uf) {

        let inputUf = document.querySelector("#inputState");
        if(uf != undefined) {
            inputUf.value = uf
            this.removeError();
        } else {
            debugger;
            inputUf.value= "";
            this.error();

    }
    }

    zeraForm() {

        let inputEndereco = document.querySelector("#inputAddress");
        let inputBairro = document.querySelector("#inputAddress2");
        let inputCidade = document.querySelector("#inputCity");
        let inputUf = document.querySelector("#inputState");
        let inputZip = document.querySelector("#inputZip");
        let inputName = document.querySelector("#name");
        let inputEmail = document.querySelector("#email");
        let inputNumber = document.querySelector("#inputNumber")

        inputEndereco.value = "";
        inputBairro.value = "";
        inputCidade.value = "";
        inputUf.value = "";
        inputZip.value = "";
        inputName.value = "";
        inputEmail.value = "";
        inputNumber.value = "";

    }

    success() {

        document.querySelector("#success").classList.remove("invisibleGreen");
    }

    error() {
        
        document.querySelector("#error").classList.remove("invisibleRed");
    }

    removeError() {

        document.querySelector("#error").classList.add("invisibleRed");
    }
}