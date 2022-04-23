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

const saveUser = (user) => {
    return apiBase({
        url: 'api/users/',
        method: 'post',
        data: user
    })
}

const updateUser = (user) => {
    return apiBase({
        url: `api/users/update/${user.id}`,
        method: 'put',
        data: user
    })
}

const deleteUser = (id) => {
    return apiBase({
        url: 'api/users/delete',
        method: 'delete',
        data: id
    })
}

export const userService = {
    getUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}