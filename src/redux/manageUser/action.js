import {
    FETCH_USERS_ASYNC,
    FETCH_USERS_SUCCESS,
    FETCH_ERROR,
    GET_USER_BY_ID_ASYNC,
    GET_USER_BY_ID_SUCCESS,
    SEARCH_FILTER,
    ROLE_FILTER,
    STATUS_FILTER,
} from './constant';

export const fetchAllUserAsync = () => ({ type: FETCH_USERS_ASYNC })
export const fetchAllUserSuccess = (data) => ({ type: FETCH_USERS_SUCCESS, payload: data })
export const fetchError = (error) => ({ type: FETCH_ERROR, payload: error })
export const getUserByIdAsync = (id) => ({ type: GET_USER_BY_ID_ASYNC, payload: id })
export const getUserByIdSuccess = (user) => ({type: GET_USER_BY_ID_SUCCESS, payload: user })

export const searchFilter = (searchText) => ({type: SEARCH_FILTER, payload: searchText})
export const roleFilter = (role) => ({type: ROLE_FILTER, payload: role})
export const statusFilter = (status) => ({type: STATUS_FILTER, payload: status})