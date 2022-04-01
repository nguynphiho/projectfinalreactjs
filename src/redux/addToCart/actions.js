export const cartAdd = (data)=>{
    return {
        type: 'CART_ADD',
        payload: data
    }
}

export const cartDelete = (data)=>{
    return {
        type: 'CART_DELETE',
        payload: data
    }
}

export const cartUpdate = (data)=>{
    return {
        type: 'CART_UPDATE',
        payload: data
    }
}