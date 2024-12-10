import axios from "axios"

const apiTeste = axios.create({
    baseURL: 'http://localhost:XXXX/',
    headers: {
        'Authorization' : `Basic ${
            btoa(`XXXXXXXXX:XXXXXXX`)
        }`,
    }
})

const apiServidor = axios.create({
    baseURL: 'http://XX.XXX.X.XXX:XXXX/',
    headers: {
        'Authorization' : `Basic ${
            btoa(`XXXXXXXXX:XXXXXXX`)
        }`,
    }
})

const api = apiServidor;

export default {
    api,
    apiTeste, 
    apiServidor,
}