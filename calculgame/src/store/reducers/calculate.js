import {
  SET_CHOICE,
  LOAD_MULTIPLICATIONS,
  CLEAR,
  CHECK_MULTIPLICATION,
} from "../constants/actions";

import { generate } from "../actions/actions-types";

// SOURCE DE VERITE
const stateInit = {
  count: 0, // information pour l'utilisateur
  score: 0,
  message: "",
  multiplication: [[1, 1]],
  multiplications: [], // choix proposés multiplication à deviner { num1 : 7, num2 : 3 }, ... Calculer à l'avance éviter de faire la même proposition
  choice: "", // données saisies de l'utilisateur si 7X3 => il va appuyer sur 2 puis 1
  success: null, // true ou false selon ce qu'aura proposé l'utilisateur
  status: true, // état du jeu
  numbers: [[9, 8, 7], [6, 5, 4], [3, 2, 1], [0]],
  number: null,
};

const reducer = (state = stateInit, action = {}) => {
  // définir des variables utilisables dans le switch case
  let multiplications, multiplication, count, message, result, calcul, score;

  switch (action.type) {
    case SET_CHOICE:
      const { number: choice } = action.payload;

      return {
        ...state,
        choice: state.choice + choice,
        number: choice,
        message : '' // on efface le message à chaque fois que l'on re-saisi une valeur
      };

    // au démarage de l'application
    case LOAD_MULTIPLICATIONS:
      multiplications = generate(2); // calculer toutes les multiplications
      multiplication = multiplications.pop(); // dépile on retire un élément de la pile (tableau)
      count = multiplications.length;

      return {
        ...state,
        multiplications,
        multiplication,
        count,
        status: true,
        score: 0,
      };

    case CLEAR:
      if (state.choice.length > 0)
        return {
          ...state,
          choice: state.choice.slice(0, -1), // retire un chiffre à droite
        };

      return {
        ...state,
      };

    case CHECK_MULTIPLICATION:
      result = parseFloat(state.choice);

      // assignation par décomposition
      const [n1, n2] = state.multiplication;

      if (state.multiplications.length === 0) {
        return {
          ...state,
          multiplication: [],
          multiplications: [],
          count: 0,
          choice: "",
          status: false,
        };
      }

      // copy dans le state
      multiplications = [...state.multiplications];
      multiplication = multiplications.pop();

      console.log("check", multiplications);

      count = state.multiplications.length;

      // gestion des feeback

      calcul = n1 * n2; // bon résultat

      if (result === calcul) {
        message = `Bravo`;
        score = state.score + 1;
      } else {
        message = `Raté la solution : ${n1} X ${n2} = ${calcul}`;
        score = state.score;
      }

      return {
        ...state,
        score,
        multiplication,
        multiplications,
        count,
        choice: "",
        message,
      };

    default:
      return state;
  }
};

export default reducer;
