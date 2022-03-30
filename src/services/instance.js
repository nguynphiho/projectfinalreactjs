import axios from "axios";
import {
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  USER_LOCAL_STORE,
} from "constants";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const apiBase = (options) =>
  new Promise((resolve, reject) => {
    API(options)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });

export const defaultRequestHeader = () => {
  const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORE));
  if (user && user.token) {
    return {
      Authorization: "Bearer " + user.token,
    };
  }
  return {};
};

const err = (error) => {
  const messError = error;
  const { response } = messError;
  if (response) {
    const { data, status } = response;
    switch (status) {
      case UNAUTHORIZED:
        messError.message = "Error " + UNAUTHORIZED;
        break;
      case FORBIDDEN:
        messError.message = `Error ${FORBIDDEN}`;
        break;
      case NOT_FOUND:
        messError.message = `Error ${NOT_FOUND}`;
        break;
      case INTERNAL_SERVER_ERROR:
        messError.message = `Error ${INTERNAL_SERVER_ERROR}`;
        break;
      default:
        messError.message = data.message;
    }
  }
  return Promise.reject(error);
};

API.interceptors.request.use(
  (config) => ({
    ...config,
    header: {
      ...config.headers,
      ...defaultRequestHeader(),
    },
  }),
  err
);

API.interceptors.response.use((response) => response, err);
