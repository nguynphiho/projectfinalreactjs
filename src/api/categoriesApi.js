const { default: axiosClient } = require("./axiosClient")

const categoriesApi = {
    getAll: () => {
        const url = '/categories';
        return axiosClient.get(url);
    }
}

export default categoriesApi;