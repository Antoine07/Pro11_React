import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';

const configureStore = (preloadedState = {}) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

    return store;
}

export default configureStore;