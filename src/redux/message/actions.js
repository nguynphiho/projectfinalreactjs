import { CLOSE_MESSAGE, OPEN_MESSAGE } from "./constaints";

export const openMessage = (open) => {
  return {
    type: OPEN_MESSAGE,
    payload: open,
  };
};

export const closeMessage = (close) => {
  return {
    type: CLOSE_MESSAGE,
    payload: close,
  };
};
