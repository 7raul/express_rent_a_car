import axios from "axios";


const http = axios.create({
    baseURL: 'https://express-rent-a-car-backend.vercel.app/',
});
export default http
