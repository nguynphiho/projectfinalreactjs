import { CLOSE_MESSAGE, OPEN_MESSAGE } from "./constaints";

const initState = {
  open: false,
  type: "success",
};

const messageReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case OPEN_MESSAGE:
      return {
        open: payload.open,
        type: payload.type,
      };
    case CLOSE_MESSAGE:
      return {
        ...state,
        open: payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
