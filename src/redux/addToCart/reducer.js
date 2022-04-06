const initState = {
    message: {
        open: false,
        type: 'success'
    },
    cartStore: []
}
const cartReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CART_ADD':
            return {
                ...state,
                cartStore: [
                    ...state.cartStore,
                    action.payload
                ]
            }           
        case 'CART_DELETE':
            return {
                ...state,
                cartStore: state.cartStore.filter((item)=> item.id !== action.payload)
            }
           
        case 'CART_UPDATE':
            let newStore = [...state.cartStore];
            newStore.forEach((storeItem)=>{
                if(storeItem.id === action.payload.id){
                    storeItem.quantity = action.payload.quantity;
                }
            })
            // console.log(newStore)
            return {
                ...state,
                cartStore: newStore
            }
        case 'OPEN_MESSAGE':
            return {
                ...state,
                message: {
                    open: action.payload.open,
                    type: action.payload.type
                }
            }
        case 'CLOSE_MESSAGE':
            return {
                ...state,
                message: {
                    ...state,
                    open: action.payload
                }
            }
        case 'CART_CLEAR':
                return {
                    ...state,
                    cartStore: []
                }
        default: 
            return state
    }
}
export default cartReducer;