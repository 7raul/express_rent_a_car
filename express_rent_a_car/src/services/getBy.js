import { http } from "./api";

export default {
    Listar: () => {
        return http.get('/cliente');
    },
    CriarCliente: (nome, BI) => {
        return http.post("/cliente", { nome, BI })
    },
    CreateSenha: (senha,) => {
        return http.post("/login", { senha })
    }
}