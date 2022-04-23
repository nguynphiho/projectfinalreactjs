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
        case FETCH_USERS_ERROR:
            return {...state, error: payload};
        case GET_USER_BY_ID:
            return {...state, selectedUser: state.users.filter((user) => user.id === payload)}
        case UPDATE_USER: {
            return {...state, users: [...state.users, payload]}
        }
        case DELETE_USER: {
            return {...state, users: state.users.filter((user) => user.id !== payload)}
        }
        case SAVE_USER: {
            console.log('save user');
            return {...state, users: [...state.users, payload]}
        }
        case SEARCH_FILTER: {
            return {...state, filter: {...state.filter, searchText: payload}}
        }
        case ROLE_FILTER: {
            return {...state, filter: {...state.filter, role: payload}}
        }
        case STATUS_FILTER: {
            return {...state, filter: {...state.filter, status: payload}}
        }
        default:
            return state;
    }
}

export default userReducer;