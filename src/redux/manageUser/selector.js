import { createSelector } from "reselect";

export const fetchingSelector = (state) => state.userReducer.fetching;
export const usersSelector = (state) => state.userReducer.users;
export const errorSelector = (state) => state.userReducer.error;
export const roleFilterSelector = (state) => state.userReducer.filter.role;
export const statusFilterSelector = (state) => state.userReducer.filter.status;
export const searchTextFilterSelector = (state) => state.userReducer.filter.status;
export const selectedUser = (state) => state.userReducer.selectedUser;

export const userRemaining = createSelector(
  usersSelector,
  roleFilterSelector,
  statusFilterSelector,
  searchTextFilterSelector,
  (users, role, status, searchText) => (
    users && users.filter((user) => (
      (
        user.usernames
        + user.fullname
        + user.email
        + user.address
      ).includes(searchText)
      && user.role === role
      && user.status === status
    ))
  )
);