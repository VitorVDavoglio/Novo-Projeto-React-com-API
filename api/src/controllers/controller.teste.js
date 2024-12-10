import modelTeste from "../models/model.teste.js";

function Teste(request, response){
    modelTeste.Teste(
        request.body.email,
        function(err, result){
            if(err){
                response.status(500).send(err);
            }else{
                response.status(200).send(result);
            }
        }
    )
}

export default {
    Teste, 
}