import { http } from "./api";

export default {
    Listar: () => {
        return http.get('/cliente');
    },
    CriarCliente: (cliente, contato) => {
        const { nome, imagem, password } = cliente;
        const { email, telefone } = contato
        return http.post("/cliente", { nome, imagem, password }, { email, telefone })
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