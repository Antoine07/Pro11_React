export const initialState = {
    numbers : [],
    number : '',
    message : ''
}

const verifNumber = ({ number }) => {

    return (
        parseFloat(number) != number 
    )
}

export const reducer = (state, action) => {
    switch(action.type){

        case 'SET_NUMBER':
            const { number } = action;

            return { 
                    ...state,
                    number: number, 
                    message : ''
                }    

        case 'ADD_NUMBER':

            if( verifNumber(state) ){

                return {
                    ...state,
                    message : "Is not a number"
                };
            }

            // Notez que concat renvoie un nouveau tableau donc une nouvel référence
            return { 
                ...state,
                numbers : state.numbers.concat(state.number),
                number : ''
            }

        default:
            return state;
    }
}