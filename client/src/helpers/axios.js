import axios from "axios";
import baseURL from './config'

console.log(baseURL);

const instance = axios.create({
    baseURL: baseURL
});

export default instance;