import { applyMiddleware, createStore } from 'redux';

// permet la gestion de l'async dans Redux

// middleware pour gérer l'historique lorsqu'on change la date de la devise
import yarmMiddleware from './middlewares/yarmMiddleware';

// les reducers (parties algo & gestion du store global)
import rootReducer from './reducers';

// preloadedState permet d'assigner des valeurs à votre store dans les reducers TODO
const  configureStore = (preloadedState = {}) => {

    // vos middlewares
    const middlewares = [ yarmMiddleware ];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

    return store;
}

export default configureStore;