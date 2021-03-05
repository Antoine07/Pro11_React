import { SET_CHOICE, GENERATE_YAM, STAT } from "../constants/actions";

import { throw_the_dice } from "../actions/actions-types";

const stateInit = {
  choice: "",
  dices: [],
  statistics: {},
};

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case SET_CHOICE:
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
      };

    case GENERATE_YAM:
      const dices = [];

      let num = parseInt(state.choice);

      while (num > 0) {
        dices.push(throw_the_dice());
        num -= 1;
      }

      return {
        ...state,
        choice: "",
        dices,
        statistic: {
          
        },
      };

    case STAT:
      const { statistics } = action.payload;

      return {
        ...state,
        statistics : statistics,
      };

    default:
      return state;
  }
};

export default reducer;
