// IMPORT CONSTANTES

// SOURCE DE VERITE
const stateInit = {
    count : 10,// information pour l'utilisateur
    score : 0, 
    message : '',
    multiplications : [], // choix proposés multiplication à deviner { num1 : 7, num2 : 3 }, ... Calculer à l'avance éviter de faire la même proposition
    choice : '', // données saisies de l'utilisateur si 7X3 => il va appuyer sur 2 puis 1
    success : null, // true ou false selon ce qu'aura proposé l'utilisateur
    status : [ 'started', 'progress', 'finished'] // état du jeu
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        default:
            return state;
    }
}

export default reducer;