import { http } from "./api";

export default {
    Listar: () => {
        return http.get('cliente');
    },
    CriarCliente: (nome) => {
        return http.post("cliente", nome)
    },
    CreateSenha: (senha,) => {
        return http.post("login", { senha })
    }
}