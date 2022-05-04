import { createSelector } from "reselect";

export const fetchingSelector = (state) => state.userReducer.fetching;
export const usersSelector = (state) => state.userReducer.users;
export const errorSelector = (state) => state.userReducer.error;
export const roleFilterSelector = (state) => state.userReducer.filter.role;
export const statusFilterSelector = (state) => state.userReducer.filter.status;
export const searchTextFilterSelector = (state) => state.userReducer.filter.searchText;
export const selectedUser = (state) => state.userReducer.selectedUser;

export const usersRemaining = createSelector(
  usersSelector,
  searchTextFilterSelector,
  roleFilterSelector,
  statusFilterSelector,
  (users, searchText, role, status) => (
    users && users.filter((user) => { 
      if (role !== 'ALL_ROLE' && status !== 'allstatus') {
        return (
          user.username
          + user.email
          + user.fullname
          + user.status
          + user.address
          + user.role
          + user.lastlogin
        ).includes(searchText)
        && user.role === role
        && user.status === status
      } else if (role !== 'ALL_ROLE' && status === 'allstatus') {
        return (
          user.username
          + user.email
          + user.fullname
          + user.status
          + user.address
          + user.role
          + user.lastlogin
        ).includes(searchText)
        && user.role === role
      } else if (status !== 'allstatus' && role === 'ALL_ROLE') {
        return (
          user.username
          + user.email
          + user.fullname
          + user.status
          + user.address
          + user.role
          + user.lastlogin
        ).includes(searchText)
        && user.status === status
      } else {
        return (
          user.username
          + user.email
          + user.fullname
          + user.status
          + user.address
          + user.role
          + user.lastlogin
        ).includes(searchText)
      }
    })
  )
)