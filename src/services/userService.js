import {apiBase} from './instance';

const getUsers = () => {
    return apiBase({
      url: 'api/user',
      method: 'get',  
    })
}

const getUserById = (id) => {
    return apiBase({
        url: `api/user/${id}`,
        method: 'get',
    })
}

const saveUser = (user) => {
    return apiBase({
        url: 'api/user/',
        method: 'post',
        data: user
    })
}

const updateUser = (user) => {
    return apiBase({
        url: `api/user/${user.id}`,
        method: 'put',
        data: user
    })
}

const deleteUser = (id) => {
    return apiBase({
        url: `api/user/${id}`,
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