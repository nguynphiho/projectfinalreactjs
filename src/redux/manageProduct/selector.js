import { createSelector } from "reselect";

export const productSelector = (state) => state.productReducer.products;
export const searchFilterSelector = (state) => state.productReducer.filter.search;
export const categoryFilterSelector = (state) => state.productReducer.filter.category;
export const statusFilterSelector = (state) => state.productReducer.filter.status;
export const voteFilterSelector = (state) => state.productReducer.filter.vote;

export const productRemaining = createSelector(
  productSelector,
  searchFilterSelector,
  categoryFilterSelector,
  statusFilterSelector,
  voteFilterSelector,
  (products, searchText, category, status, vote) => (
      products && products.filter((product) => (
        product.title.includes(searchText) &&
        product.category.id === category &&
        product.status === status &&
        product.vote === vote
      )
    )
  )
);