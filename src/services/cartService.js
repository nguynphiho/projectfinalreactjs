import { apiBase } from "./instance";

const getAllCarts = () => {
  return apiBase({
    url: `api/carts`,
    method: "GET",
  });
};

const addToCart = (cart) => {
  return apiBase({
    url: `api/carts`,
    method: "POST",
    data: cart,
  });
};

const updateCart = ({ id, quantity }) => {
  return apiBase({
    url: `api/carts/${id}`,
    method: "PUT",
    data: { quantity },
  });
};

const deleteCart = (id) => {
  return apiBase({
    url: `api/carts/${id}`,
    method: "DELETE",
  });
};

const clearCart = () => {
  return apiBase({
    url: "api/carts/",
    method: "DELETE",
  });
};

const cartService = {
  getAllCarts,
  addToCart,
  updateCart,
  deleteCart,
  clearCart,
};

export default cartService;
