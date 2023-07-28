import axios from "axios";


export const http = axios.create({
    baseURL: 'http://express-rent-a-car-backend.vercel.app/',
});

