
import { ADD_MEMORY, INIT_GAME, RESET_MEMORY } from '../constants/actions';

// source de vérité
const initialState = {
    step: 1,
    date: null,
    choicePlayer: [],
    choiceComputer: [],
    player: null
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case INIT_GAME:

            return {
                ...state,
                date: new Date
            }

        case ADD_MEMORY:

            const { choicePlayer, choiceComputer, player } = action.payload;

            // les no value sont le dernier cas on propose mais l'adversaire n'a plus rien à proposer
            return {
                ...state,
                step: state.step + 1,
                choiceComputer: [...state.choiceComputer, choiceComputer || "no value"],
                choicePlayer: [...state.choicePlayer, choicePlayer || "no value"],
                player: player
            }

        case RESET_MEMORY:

            console.log('reset ...Memory')

            return { ...state, ...initialState }

        default:
            return state;
    }
}