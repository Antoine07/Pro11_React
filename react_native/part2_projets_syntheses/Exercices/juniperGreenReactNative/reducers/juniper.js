
import { ADD_NUMBER, INIT_GAME, ADD_MESSAGE, RESET_MEMORY } from '../constants/actions';
import { calculPossibles } from '../actions/action-type';

// source de vérité
const initialState = {
    number: '',
    possibles: [],
    valid: [],
    computer: '',
    player: '',
    message: '',
    flag_player: true,
    error: false
}

export default (state = initialState, action = {}) => {

    let possibles, computer, player, message, valid;

    switch (action.type) {

        case ADD_NUMBER:

            return { ...state, number: action.payload }

        case INIT_GAME:

            possibles = [ ...Array(101).keys() ];
            possibles.shift();
            computer = possibles[Math.round(Math.random() * 101)];
            possibles = possibles.filter(num => num != computer);
            valid = calculPossibles(possibles, computer);

            message = "C'est à vous";

            return {
                ...state,
                possibles: possibles,
                valid: valid,
                computer: computer,
                message: message,
                flag_player: true,
            }

        case 'PLAYER':
            player = parseInt(action.payload);

            if ( state.valid.indexOf(player) == -1 ) {

                return {
                    ...state,
                    message: `Votre choix ${player} n'est pas possible`,
                    number: '',
                    error: true // pour le middleware on n'enchaine pas les actions
                }
            }

            possibles = [ ...state.possibles ].filter(num => num != player);
            valid = calculPossibles(possibles, player);

            return {
                ...state,
                valid: valid,
                possibles: possibles,
                player: parseInt(action.payload),
                flag_player: false,
                number: '',
                message: '',
                error: false
            };

        case 'COMPUTER':

            computer = state.valid.sort(() => Math.random() - 0.5);
            possibles = [...state.possibles].filter(num => num != computer[0]);
            valid = calculPossibles(possibles, computer[0]);

            return {
                ...state,
                valid: valid,
                possibles: possibles,
                flag_player: true,
                computer: computer[0]
            };

        case RESET_MEMORY:

            return { ...state, ...initialState }

        case ADD_MESSAGE:

            return { ...state, message: action.payload }

        default:
            return state;
    }
}

