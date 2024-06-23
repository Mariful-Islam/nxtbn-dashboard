import useInterceptors from './interceptors';
import axios from 'axios';


const useApi = () => {
    const interceptor = useInterceptors();
   
    const api = {
        adminLogin: (data, params={}) => interceptor.post(`/user/dashboard/api/login/`, data, {params : params}),
        refreshToken: (data, params={}) => axios.post(`/user/dashboard/api/token/refresh/`, data, {params : params}),
        adminLogout: (data, params={}) => interceptor.post(`/user/dashboard/api/logout/`, data, {params : params}),
        getCategories: (params = {}) => interceptor.get(`/product/dashboard/api/categories/`, {params: params}),
    };

    return api;
}

export default  useApi;