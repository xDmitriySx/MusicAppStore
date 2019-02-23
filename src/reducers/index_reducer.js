import { combineReducers } from 'redux';
import music_reducer from './music_reducer'
import cart_reducer from './cart_reducer'
import filter_reducer from './filter_reducer';

export default combineReducers({
    music_reducer, cart_reducer, filter_reducer
})