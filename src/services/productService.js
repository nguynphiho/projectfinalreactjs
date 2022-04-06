import { apiBase } from "./instance";

const getProducts = () => {
    return apiBase({
        url: 'api/products',
        method: 'GET',
    })
}

const deleteProductApi = (id) => {
    return apiBase({
        url: `api/products/delete/${id}`,
        method: 'DELETE',
    })
}

const saveProduct = (product) => {
    return apiBase({
        url: 'api/products/save',
        method: 'POST',
        data: product,
    })
};

const updateProduct = (product) => {
    return apiBase({
        url: `api/products/update/${product.id}`,
        method: 'PUT',
        data: product,
    })
};


const productService = {
    getProducts,
    deleteProductApi,
    saveProduct,
    updateProduct,
}

export default productService;