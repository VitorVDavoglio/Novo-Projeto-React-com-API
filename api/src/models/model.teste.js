import { dbConfig } from "../config/database.js";

function Teste(email, callback){
    
    let ssql = `
        SELECT
            *
        FROM
            Login
        WHERE
            email = ?
        ORDER BY dt_criacao DESC
        LIMIT 1
    `

    dbConfig.query(ssql, [email], function(err, result){
        if(err){
            callback(err, 'Erro ao conectar com o banco');
        } else {
            callback(undefined, result[0]);
        }
    });
}

export default {
    Teste, 
}