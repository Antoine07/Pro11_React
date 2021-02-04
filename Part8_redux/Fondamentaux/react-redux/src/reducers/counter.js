import { INCREMENT } from '../constants/actions';

const stateInit = {
    count : 10
}

const reducer = (state = stateInit, action ) =>{

    switch(action.type){

        case INCREMENT:

            return {
                ...state,
                count : state.count + action.payload
            }


        default: 
            return state;
    }
}

export default reducer;