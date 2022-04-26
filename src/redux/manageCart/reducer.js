import {
  CARTS_FETCH_ERROR,
  CARTS_FETCH_REQUEST,
  CARTS_FETCH_SUCCESS,
  CART_ADD_ERROR,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_CLEAR_ERROR,
  CART_CLEAR_REQUEST,
  CART_CLEAR_SUCCESS,
  CART_DELETE_ERROR,
  CART_DELETE_REQUEST,
  CART_DELETE_SUCCESS,
  CART_UPDATE_ERROR,
  CART_UPDATE_REQUEST,
  CART_UPDATE_SUCCESS,
} from "./constaints";

const initState = {
  fetching: false,
  message: {
    open: false,
    type: "success",
  },
  carts: [],
  totalCost: 0,
  errMsg: "",
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CARTS_FETCH_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CARTS_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        carts: payload.cartItems,
        totalCost: payload.totalCost,
      };
    case CARTS_FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        errMsg: payload,
      };

    case CART_ADD_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CART_ADD_SUCCESS:
      return {
        ...state,
        fetching: false,
        carts: [...state.carts, payload],
      };
    case CART_ADD_ERROR:
      return {
        ...state,
        fetching: false,
        errMsg: payload,
      };

    case CART_DELETE_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CART_DELETE_SUCCESS:
      return {
        ...state,
        fetching: false,
        carts: state.carts.filter((item) => item.id !== payload),
      };
    case CART_DELETE_ERROR:
      return {
        ...state,
        fetching: false,
        errMsg: payload,
      };

    case CART_UPDATE_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CART_UPDATE_SUCCESS:
      let newCarts = [...state.carts];
      let newTotalCost = state.totalCost;
      newCarts.forEach((cart) => {
        if (cart.id === payload.id) {
          newTotalCost = newTotalCost - cart.quantity * cart.product.price;
          cart.quantity = payload.quantity;
          newTotalCost = newTotalCost + cart.quantity * cart.product.price;
        }
      });
      return {
        ...state,
        fetching: false,
        carts: newCarts,
        totalCost: newTotalCost,
      };
    case CART_UPDATE_ERROR:
      return {
        ...state,
        fetching: false,
        errMsg: payload,
      };

    case CART_CLEAR_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CART_CLEAR_SUCCESS:
      return {
        ...state,
        fetching: false,
        carts: [],
      };
    case CART_CLEAR_ERROR:
      return {
        ...state,
        fetching: false,
        errMsg: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
