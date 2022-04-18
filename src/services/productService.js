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

const getCategories = () => {
  return apiBase({
    url: "/api/categories",
    method: "GET",
  });
};

const getStatusesProduct = () => {
  return apiBase({
    url: "/api/products/status",
    method: "GET",
  });
};

const deleteProductApi = (id) => {
  return apiBase({
    url: `api/admin/products/${id}`,
    method: "DELETE",
  });
};

const saveProduct = (product, image) => {
  const data = new FormData();
  data.append("product", JSON.stringify(product));
  data.append("image", image);
  return apiBase({
    url: "api/admin/products",
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const updateProduct = (product) => {
  return apiBase({
    url: `api/admin/products/${product.id}`,
    method: "PUT",
    data: product,
  });
};

const searchProduct = (searchText) => {
  return apiBase({
    url: `api/products/search`,
    method: "GET",
    params: {
      title: searchText,
    },
  });
};

const productService = {
  getProducts,
  deleteProductApi,
  saveProduct,
  updateProduct,
  searchProduct,
  getCategories,
  getStatusesProduct,
};

export default productService;
