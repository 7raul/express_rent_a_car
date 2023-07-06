import { http } from "./api";

export default {
    Listar: () => {
        return http.get('/cliente');
    },
    CriarCliente: (cliente) => {
        const { nome, password, email } = cliente
        return http.post("/cliente", { nome, password }, { email })
    },
    CreateSenha: (senha,) => {
        return http.post("/login", senha)
    },
    ListarCarro: () => {
        return http.get("/carro");
    }
}