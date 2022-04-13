import {apiBase} from './instance';

const getUsers = () => {
    return apiBase({
      url: 'api/users',
      method: 'get',  
    })
}

const getUserById = (id) => {
    return apiBase({
        url: `api/users/${id}`,
        method: 'get',
    })
}

const saveUser = () => {
    
}

export const userSercivce = {
    getUsers,
    getUserById
}