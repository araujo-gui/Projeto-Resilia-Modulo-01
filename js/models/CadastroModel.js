class CadastroModel {
    
    constructor(){

    };

    buscar(cep) {
        
        if(cep.length == 8) {
            let request = new XMLHttpRequest();

            request.open("GET", `https://viacep.com.br/ws/${cep}/json/`);

            request.addEventListener("load", () => {
                
                if(request.status == 200) {

                    let response = request.responseText;

                    let tresponse = JsonHelper._converter(response);

                    console.log(tresponse);
                } 
            })
                

            request.send();


    }
}
}