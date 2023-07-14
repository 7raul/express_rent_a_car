import { http } from "./api";

export default {
    Listar: () => {
        return http.get('/cliente');
    },
    CriarCliente: (cliente, contato) => {
        return http.post("/cliente", [cliente, contato])
    },
    CreateSenha: (senha,) => {
        return http.post("/login", senha)
    },
    ListarCarro: () => {
        return http.get("/carro");
    },
    ListarCarroModelo: (modelo) => {
        return http.get(`/carro/${modelo}`);
    },
    ListarEmpresa: () => {
        return http.get("/empresa")
    }
}