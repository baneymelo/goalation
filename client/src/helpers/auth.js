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
        request =>{
            const token = getToken()
            if(token){
                request.headers.authorization = `Bearer ${token}`
            }
        return request;
    }, error =>{
        return Promise.reject(error)
    })
    
    axios.interceptors.response.use( response =>{
        const { config, data } = response;
        if(response.data === 'TokenExpiredError'){
            removeToken()
        }
        
        if(config.url === '/auth/signin' && data.token){
            setToken(data.token)
            delete data.token;
        }
        if(config.url === '/auth/signup' && data.token){
            setToken(data.token)
            delete data.token;
        }
        return response;
    },
    error =>{
        return Promise.reject(error.message);
    })
}
