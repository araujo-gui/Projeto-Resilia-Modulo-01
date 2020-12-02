class CadastroModel {
    
    constructor(){

        this._endereco = "";
        this._bairro = "";
        this._cidade = "";
        this._uf = "";
    };

    buscar(cep) {
        
        if(cep.length == 8) {
            let request = new XMLHttpRequest();

            request.open("GET", `https://viacep.com.br/ws/${cep}/json/`, false);

            request.addEventListener("load", () => {
                
                if(request.status == 200) {
                    // debugger;
                    let response = request.responseText;

                    let consume = JsonHelper.converter(response);

                    this.consomeInfo(consume);
                } else {
                    
                    throw new Error('CEP inválido.');
                }
            })
            
            request.send();               
    } else if (cep.length > 8) {
        
        let cadastroView = new CadastroView();
        cadastroView.error();
    }
    }
    
    consomeInfo(consume) {
        
        this._endereco = consume.logradouro;
        this._bairro = consume.bairro;
        this._cidade = consume.localidade;
        this._uf = consume.uf;
    }

    get endereco() {
        
        return this._endereco;
    }

    get bairro() {
        
        return this._bairro;
    }

    get cidade() {
        
        return this._cidade;
    }

    get uf() {
        
        return this._uf;
    }

}

    

