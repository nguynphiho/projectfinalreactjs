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

const getProduct = (id) => {
  return apiBase({
    url: `/api/products/${id}`,
    method: "GET",
  });
};

const getCategoriesProduct = () => {
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

const updateProductImage = (product, image) => {
  const data = new FormData();
  data.append("product", JSON.stringify(product));
  data.append("image", image);
  return apiBase({
    url: `api/admin/products/image/${product.id}`,
    method: "PUT",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const deleteProduct = (id) => {
  return apiBase({
    url: `api/admin/products/${id}`,
    method: "DELETE",
  });
};

const filterProduct = ({ category, vote, status, search, price }) => {
  let filter = "";
  if (category !== "") {
    filter += "category=" + category + ",";
  }
  if (vote !== "") {
    filter += "vote=" + vote + ",";
  }
  if (status !== "") {
    filter += "status=" + status + ",";
  }
  if (search !== "") {
    filter += "title:" + search + ",";
  }
  if (price.length > 0) {
    const [start, end] = price;
    filter += "price>" + start + ",price<" + end + ",";
  }

  if (filter !== "") {
    filter = filter.substring(0, filter.length - 1);
  }
  return apiBase({
    url: `api/products/filter`,
    method: "GET",
    params: {
      search: filter,
    },
  });
};

const productService = {
  getProducts,
  getProduct,
  getCategoriesProduct,
  getStatusesProduct,
  saveProduct,
  updateProduct,
  updateProductImage,
  deleteProduct,
  filterProduct,
};

export default productService;
