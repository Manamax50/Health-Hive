import axios from 'axios';

const myApi = axios.create({
    baseURL: import.meta.env.VITE_Base_URL,
    timeout:  60*60*60,
    headers:{
        "Content-Type" : "application/json",
        Accept: "application/json", }

});

myApi.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');

    if(token){
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
});
export default myApi