import {
    FETCH_USERS_ASYNC,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    SAVE_USER,
    DELETE_USER,
    UPDATE_USER,
    GET_USER_BY_ID,
    SEARCH_FILTER,
    ROLE_FILTER,
    STATUS_FILTER,
} from './constant';

export const fetchAllUserAsync = () => ({ type: FETCH_USERS_ASYNC })
export const fetchAllUserSuccess = (data) => ({ type: FETCH_USERS_SUCCESS, payload: data })
export const fetchAllUserError = (error) => ({ type: FETCH_USERS_ERROR, payload: error })
export const getUserById = (id) => ({ type: GET_USER_BY_ID, payload: id })

export const saveUser = (user) => ({ type: SAVE_USER, payload: user });
export const deleteUser = (id) => ({ type: DELETE_USER, payload: id });
export const updateUser = (user) => ({ type: UPDATE_USER, payload: user });

export const searchFilter = (searchText) => ({type: SEARCH_FILTER, payload: searchText})
export const roleFilter = (role) => ({type: ROLE_FILTER, payload: role})
export const statusFilter = (status) => ({type: STATUS_FILTER, payload: status})