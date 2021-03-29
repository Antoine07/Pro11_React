import { applyMiddleware, createStore } from 'redux';

// permet la gestion de l'async dans Redux
import thunkMiddleware from 'redux-thunk';

// middleware pour gérer l'historique lorsqu'on change la date de la devise

// les reducers (parties algo & gestion du store global)
import rootReducer from './reducers';

const  configureStore = (preloadedState = {}) => {

    // vos middleware
    const middlewares = [ thunkMiddleware];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

    return store;
}

export default configureStore;