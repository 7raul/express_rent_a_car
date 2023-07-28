import { http } from "./api";

export default {
    Listar: () => {
        return http.get('cliente');
    },
    ListarCarro: () => {
        return http.get('carro')
    },

    ListarEmpresa: () => {
        return http.get('empresa')
    }
}