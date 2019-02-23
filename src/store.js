import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import index_reducer from './reducers/index_reducer';


export default() => {
    const store = createStore(index_reducer, applyMiddleware(logger))
    return store;
}

