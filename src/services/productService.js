import { apiBase } from "./instance";

const getProducts = () => {
  return apiBase({
    url: "/api/products",
    method: "GET",
  });
  // const filter = {
  //     sortField: "title",
  //     sortBy: "DESC",
  //     page: "1",
  //     size: 2
  // };
  // return apiBase({
  //     url: 'api/admin/products',
  //     method: 'GET',
  //     data: filter
  // })
};

const deleteProductApi = (id) => {
  return apiBase({
    url: `api/admin/products/${id}`,
    method: "DELETE",
  });
};

const saveProduct = (product) => {
  return apiBase({
    url: "api/admin/products",
    method: "POST",
    data: product,
  });
};

const updateProduct = (product) => {
  return apiBase({
    url: `api/admin/products/${product.id}`,
    method: "PUT",
    data: product,
  });
};

const productService = {
  getProducts,
  deleteProductApi,
  saveProduct,
  updateProduct,
};

export default productService;
