
import { ADD_AMOUNT, CALCUL_TOKENS, RESET } from '../constants/actions';

// source de vérité
const initialState = {
    denominations: [100, 50, 20, 10, 5, 1],
    tokens: [],
    amount: ''
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case ADD_AMOUNT:

            return { ...state, amount: action.payload }
        
        case RESET:

            return { ...state, tokens : [], amount : '' }

        case CALCUL_TOKENS:
            let amount = parseInt( state.amount );

            const tokens = [];
            let count = 0;

            for (const d of state.denominations) {
                if (amount === 0)
                    break;

                while (amount >= d) {
                    amount -= d;
                    count++;
                }
                if(count > 0)
                    tokens.push({ 'denomination': d, 'unit': count });

                count = 0;
            }

            return { ...state, tokens: tokens, amount : '' }

        default:
            return state;
    }
}