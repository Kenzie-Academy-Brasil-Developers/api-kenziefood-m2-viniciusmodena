import { Api } from "./controller/api.js"

// Usuario já foi registrado, este são os dados:

const user = {
    name: 'Modena',
    email: 'modena@gmail.com',
    password: 'equipe1'
}

const token = await Api.userLogin(user)

