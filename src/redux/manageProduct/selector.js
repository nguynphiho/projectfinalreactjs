import { createSelector } from "reselect";

export const productRemaining = createSelector(
  (products, searchText, category, status, vote) => {
    return products.filter((product) => {
      return (
        product.title.includes(searchText) &&
        product.category.id === category &&
        product.status === status &&
        product.vote === vote
      );
    });
  }
);
