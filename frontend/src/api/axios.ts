import axios from 'axios';

const myApi = axios.create({
    baseURL: import.meta.env.baseURL,
    timeout:  60*60*60,
    headers:{
        "Content-Type" : "application/json",
        Accept: "application/json", }

});

myApi.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
export default myApi