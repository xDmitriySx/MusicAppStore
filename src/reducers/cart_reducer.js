const initialState = {
    cart_reducer_items: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MUSIC_TO_CART' : 
        return {
            ...state,
            cart_reducer_items: [...state.cart_reducer_items, action.payload]
        };
        case 'REMOVE_MUSIC_FROM_CART' : 
        return {
            ...state,
            cart_reducer_items: state.cart_reducer_items.filter(o => o.id !== action.payload)
        };
        case 'REMOVE_MUSIC_FROM_CART_COMPONENT' : 
        return {
            ...state,
            cart_reducer_items: state.cart_reducer_items.filter(o => o.ind !== action.payload)
        };
        default:
        return state
    }
}