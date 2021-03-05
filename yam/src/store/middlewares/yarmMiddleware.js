import {
  set_stat,
  countOccu,
  serach_double_pair,
} from "../actions/actions-types";

const middleware = (store) => (next) => (action) => {
  const returnAction = next(action);

  if (action.type === "GENERATE_YAM") {
    const { dices } = store.getState().y; // on récupère tous les dés
    const statistics = {
      yam: 0,
      brelan: 0,
      square: 0,
      double_pair: 0,
    };

    for (const dice of dices) {

      if (countOccu(dice, 5)) {
        statistics.yam += 1;
        continue;
      }

      if (countOccu(dice, 4)) {
        statistics.square += 1;
        continue;
      }

      if (countOccu(dice, 3)) {
        statistics.brelan += 1;
        continue;
      }

      if (serach_double_pair(dice)) {
        statistics.double_pair += 1;
        continue;
      }
    }

    store.dispatch(set_stat({ statistics }));
  }

  return returnAction;
};

export default middleware;
