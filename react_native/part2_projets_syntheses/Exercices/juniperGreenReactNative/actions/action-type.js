import {
    ADD_NUMBER, INIT_GAME, ADD_MEMORY, ADD_MESSAGE, RESET_MEMORY, MAX_JUNIPER
} from '../constants/actions';

export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER, payload
    }
};

export const initGame = () => {
    return {
        type: INIT_GAME
    }
}


export const setMessage = (payload) => {
    return {
        type: ADD_MESSAGE, payload
    }
}

export const player = (payload) => {
    return {
        type: 'PLAYER', payload
    }
}

export const computer = () => {
    return {
        type: 'COMPUTER'
    }
}

// Middleware Redux
// fonction store qui retourne une fonction next qui retourne une fonction action qui elle même peut retourner quelque chose
export const computerChoice = store => next => action => {

    if ( action.type === 'PLAYER' ) {

        const returnValue = next(action);

        // le state de juniper qui vient d'etre modifié
        const { juniper } = store.getState();

        // si pas erreur de la part de player on fait choisir computer
        if (juniper.error === false) {
            store.dispatch(computer());
        }

        return returnValue;
    }

    if (action.type === 'COMPUTER') {

        console.log('computer action !!!!');

    }

    // pour les autres actions qui ne rentrent pas dans la logique du tour par tour
    return next(action);

};

export const addMemory = (payload) => {
    return {
        type: ADD_MEMORY, payload
    }
}


// Pour tout ce qui est asynchrone il faut utiliser un middleware thunk
// reset asynchrone pour nettoyer les states des deux reducers
// redux va exécuter les dispatch de manière synchrone du coup
// ici on est sûr qu'il va exécuter les deux dispatch dans l'ordre du code ci-dessous
// resetMemory puis resetJuniper
export const reset = () => {

    return dispatch => {
        dispatch(resetMemory());

        let promise = new Promise((resolve, reject) => {
            resolve(true);
        });

        return promise.then(() => { dispatch(resetJuniper()); });
    }
}

// reducer juniper
export const resetJuniper = () => {
    return {
        type: RESET_MEMORY
    }
}

// reducer score
export const resetMemory = () => {
    return {
        type: RESET_MEMORY
    }
}


export const calculPossibles = (possibles, choice) => {
    let [candidat, i, d, multiples, divisors] = [2, 2, 1, [], []];

    // multiple & diviseurs
    while (candidat <= 100) {
        candidat = i * choice;
        if (possibles.indexOf(candidat) != -1)
            multiples.push(candidat);
        i++;
    }

    while (d < choice) {
        if (choice % d == 0 && possibles.indexOf(d) != -1)
            divisors.push(d);
        d++;
    }

    // on élimine les doublons
    return [...new Set([...multiples, ...divisors])]
}