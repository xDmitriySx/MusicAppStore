const initialState = {
    isReadyMusic: false,
    music_reducer_items: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_ALL_MUSIC' : 
        return {
            ...state,
            music_reducer_items: action.payload,
            isReadyMusic: true
        };
        case 'ADD_MUSIC' : 
        return {
            ...state,
            music_reducer_items: [...state.music_reducer_items, action.payload],
            isReadyMusic: true
        };
        default:
        return state
    }
}