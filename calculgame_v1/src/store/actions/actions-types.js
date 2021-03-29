import { SET_CHOICE, CHECK_MULTIPLICATION } from "../constants/actions";

export const set_choice = (payload) => {
  return {
    type: SET_CHOICE,
    payload,
  };
};


export const go = () => {
  return {
    type: CHECK_MULTIPLICATION,
  };
};

