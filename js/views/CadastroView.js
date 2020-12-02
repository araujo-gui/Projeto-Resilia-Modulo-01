class CadastroView {
    
    constructor(){

    }

    addEndereco(endereco) {
        
        let inputEndereco = document.querySelector("#inputAddress");
        inputEndereco.value = endereco;
    }

    addBairro(bairro) {
        
        let inputBairro = document.querySelector("#inputAddress2");
        inputBairro.value = bairro;
    }

    addCidade(cidade) {

        let inputCidade = document.querySelector("#inputCity");
        inputCidade.value = cidade;
    }

    addUf(uf) {

        let inputUf = document.querySelector("#inputState");
        inputUf.value = uf
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

        document.querySelector("#success").classList.remove("invisible");
    }
}