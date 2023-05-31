import { http } from "./api";

export default {
    Listar: () => {
        return http.get('/cliente')
    }
}