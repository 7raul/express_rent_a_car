import { http } from "./api";

export default {
    Listar: () => {
        return http.get('cliente');
    },
    ListarCarro: () => {
        return http.get('carro')
    },
    ListarCarroPeloNome: (modelo) => {
        return http.get(`carro/${modelo}`)
    },

    ListarEmpresa: () => {
        return http.get('empresa')
    }
}