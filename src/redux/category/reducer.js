import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
} from "./constants";

const initState = {
  categories: [],
  fetching: false,
  errMsg: "",
};

const categoryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CATEGORIES_REQUEST:
      return { ...state, fetching: true };
    case CATEGORIES_SUCCESS:
      return { ...state, fetching: false, categories: payload };
    case CATEGORIES_ERROR:
      return { ...state, errMsg: payload };
    default:
      return state;
  }
};

export default categoryReducer;
