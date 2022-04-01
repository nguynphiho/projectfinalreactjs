const initState = []
const cartReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CART_ADD':
            return [
                ...state,
                action.payload
            ]
           
        case 'CART_DELETE':
            return state.filter((item)=> item.id !== action.payload)
           
        case 'CART_UPDATE':
            let newStore = [...state];
            newStore.forEach((storeItem)=>{
                if(storeItem.id === action.payload.id){
                    storeItem.quantity = action.payload.quantity;
                }
            })
            console.log(newStore)
            return newStore
        default: 
            return state
    }
}
export default cartReducer;