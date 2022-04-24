import {
  STATUSES_REQUEST,
  STATUSES_SUCCESS,
  STATUSES_ERROR,
} from "./constants";

const initState = {
  statuses: null,
  fetching: false,
  errMsg: "",
};

const statusReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case STATUSES_REQUEST:
      return { ...state, fetching: true };
    case STATUSES_SUCCESS:
      return { ...state, fetching: false, statuses: payload };
    case STATUSES_ERROR:
      return { ...state, errMsg: payload };
    default:
      return state;
  }
};

export default statusReducer;
