import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
} from "./constants";

export const requestCategories = () => ({
  type: CATEGORIES_REQUEST,
});

export const requestCategoriesSuccess = (categories) => ({
  type: CATEGORIES_SUCCESS,
  payload: categories,
});

export const requestCategoriesError = (error) => ({
  type: CATEGORIES_ERROR,
  payload: error,
});
