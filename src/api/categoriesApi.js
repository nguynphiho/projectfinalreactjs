const { default: axiosClient } = require("./axiosClient")

const categoriesApi = {
    getAll: () => {
        const url = '/api/categories';
        return axiosClient.get(url);
    }
}

export default categoriesApi;