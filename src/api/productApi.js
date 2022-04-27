import axiosClient from './axiosClient';


// api/productApi.js
const productApi = {
    getAll: (params) => {
        const url = '/tea';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/tea/${id}`;
        return axiosClient.get(url);
    }
}
export default productApi;