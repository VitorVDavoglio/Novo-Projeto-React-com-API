import express from "express";
import cors from "cors";
import expressBasicAuth from "express-basic-auth";

import routeTeste from "./routes/route.teste.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(expressBasicAuth({
    authorizer: function(usuario, senha){
        return expressBasicAuth.safeCompare(usuario, "Testando") && expressBasicAuth.safeCompare(senha, "teste2#");
    }
}));

//Rotas
app.use(routeTeste)

const port = 3010;

app.listen(port, () => {
    console.log("Servidor rodando na porta: " + port);
})