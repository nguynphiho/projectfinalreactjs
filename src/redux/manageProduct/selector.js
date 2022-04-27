import { createSelector } from "reselect";

export const productsSelector = (state) => state.productReducer.products;
export const fetchingSelector = (state) => state.productReducer.fetching;
export const searchFilterSelector = (state) => state.productReducer.filter.search;
export const categoryFilterSelector = (state) => state.productReducer.filter.category;
export const statusFilterSelector = (state) => state.productReducer.filter.status;
export const voteFilterSelector = (state) => state.productReducer.filter.vote;
export const selectedProduct = (state) => state.productReducer.selectedProduct;

export const productRemaining = createSelector(
  productsSelector,
  searchFilterSelector,
  voteFilterSelector,
  categoryFilterSelector,
  statusFilterSelector,
  (products, searchText, vote, category, status) => (
    products && products.filter((product) => {
      if (vote === '' && category === '' && status === '') {
        return (
          product.name
          + product.category.name
          + product.price
          + product.status
        ).includes(searchText)
      } else if (vote === '' && category === '') {
        return (
          product.name
          + product.category.name
          + product.price
          + product.status
        ).includes(searchText)
          && product.status === status
      } else if (vote === '' && status === '') {
        return (
          product.name
          + product.category.name
          + product.price
          + product.status
        ).includes(searchText)
          && product.category.value === category
      } else if (status === '' && category === '') {
        return (
          product.name
          + product.category.name
          + product.price
          + product.status
        ).includes(searchText)
          && product.vote === vote
      } else if (vote === '') {
        return (
          product.name
          + product.category.name
          + product.price
          + product.status
        ).includes(searchText)
          && product.category.value === category
          && product.status === status
      } else if (category === '') {
        return (
          product.name
          + product.category.name
          + product.price
          + product.status
        ).includes(searchText)
          && product.status === status
          && product.vote === vote
      } else if (status === '') {
        return (
          product.name
          + product.category.name
          + product.price
          + product.status
        ).includes(searchText)
          && product.category.value === category
          && product.vote === vote
      } else {
        return (
          product.name
          + product.category.name
          + product.price
          + product.status
        ).includes(searchText)
          && ((product.vote === vote)
          && (product.category.value === category)
          && (product.status === status))
      };
    })
  ));