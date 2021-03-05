
import { combineReducers } from 'redux';

import juniper from './juniper';
import score from './score';

/**
 * 
 * state change maintenant il a la structure suivante
 * { juniper : { ...}, score : { ... }}
 */
export default combineReducers({
    juniper,
    score
});