import { apiBase } from "./instance";

const getProducts = () => {
  return apiBase({
    url: "/api/products",
    method: "get",
  });
};

const getProductById = (id) => {
  return apiBase({
    url: `/api/products/${id}`,
    method: "GET",
  });
};

const getCategories = () => {
  return apiBase({
    url: "/api/categories",
    method: "GET",
  });
};

const getStatus = () => {
  return apiBase({
    url: "/api/products/status",
    method: "GET",
  });
};

const deleteProduct = (id) => {
  return apiBase({
    url: `api/products/${id}`,
    method: "DELETE",
  });
};

// const saveProduct = (product, image) => {
//   const data = new FormData();
//   data.append("product", JSON.stringify(product));
//   data.append("image", image);
//   return apiBase({
//     url: "api/admin/products",
//     method: "POST",
//     data,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

const saveProduct = (product) => {
  return apiBase({
    url: "api/products",
    method: "POST",
    data: product,
  });
};

const updateProduct = (product) => {
  return apiBase({
    url: `api/products/${product.id}`,
    method: "PUT",
    data: product,
  });
};

// const updateProductImage = (product, image) => {
//   const data = new FormData();
//   data.append("product", JSON.stringify(product));
//   data.append("image", image);
//   return apiBase({
//     url: `api/admin/products/image/${product.id}`,
//     method: "PUT",
//     data,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

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
  deleteProduct,
  saveProduct,
  updateProduct,
  searchProduct,
  getCategories,
  getStatus,
  getProductById,
};

export default productService;
