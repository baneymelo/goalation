import axios from "./axios";

export const setToken = token => {
    localStorage.setItem('token', token)
}
export const getToken = () => {
    return localStorage.getItem('token')
}
export const removeToken = () => {
    localStorage.removeItem('token')
}

export const initAxiosInterceptors = () => {
    axios.interceptors.request.use(
        config =>{
            const token = getToken()
            if(token){
                config.headers.authorization = `Bearer ${token}`
            }
        return config;
    })
    
}
