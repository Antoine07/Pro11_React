import { INCREMENT } from '../constants/actions';

export const increment = payload =>{

    return {
        type : INCREMENT, payload
    }
}