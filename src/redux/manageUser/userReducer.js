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

const initState = {
    filter: {
        role: null,
        status: null,
        searchText: '',
    },
    users: [],
    fetching: false,
    error: '',
    selectedUser: null,
}

const userReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case FETCH_USERS_ASYNC:
            return {...state, fetching: true};
        case FETCH_USERS_SUCCESS:
            return {...state, fetching: false, users: payload};
        case FETCH_ERROR:
            return {...state, error: payload};
        case SEARCH_FILTER: {
            return {...state, filter: {...state.filter, searchText: payload}}
        }
        case ROLE_FILTER: {
            return {...state, filter: {...state.filter, role: payload}}
        }
        case STATUS_FILTER: {
            return {...state, filter: {...state.filter, status: payload}}
        }
        case GET_USER_BY_ID_ASYNC: {
            return {...state, fetching: true}
        }
        case GET_USER_BY_ID_SUCCESS: {
            return {...state, fetching: false, selectedUser: payload}
        }
        default:
            return state;
    }
}

export default userReducer;