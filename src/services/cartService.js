import { apiBase } from "./instance";

const getCart = () => {
	return apiBase({
		url: "/api/carts",
		method: "GET",
	});
};

const cartService = {
	getCart,
};

export default cartService;
