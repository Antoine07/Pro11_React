import { SET_CHOICE, LOAD_MULTIPLICATIONS, CLEAR, CHECK_MULTIPLICATION } from "../constants/actions";

export const set_choice = (payload) => {
  return {
    type: SET_CHOICE,
    payload,
  };
};

export const load = () => {
  return {
    type: LOAD_MULTIPLICATIONS,
  };
};

export const reload = () => {
  return {
    type: LOAD_MULTIPLICATIONS,
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};

export const go = () => {
  return {
    type: CHECK_MULTIPLICATION,
  };
};

export const generate = (max_multiplication) => {
  const mult = [];

  // définition d'un générateur pour générer les nombres dans mon tableau de multiplication
  function* gen(max, num = 0) {
    while (num < max) {
      num = num + 1;

      yield num; // retourne la valeur dans le script courant
    }
  }

  for (const n1 of gen(max_multiplication)) {
    for (const n2 of gen(max_multiplication)) {
      mult.push([n1 , n2 ]);
    }
  }

  // ASTUCE POUR mélanger les données du tableau de nombres
  mult.sort((_) => Math.random() - 0.5);

  return mult;
};
