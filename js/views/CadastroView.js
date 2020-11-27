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
}