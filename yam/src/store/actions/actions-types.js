import { SET_CHOICE, GENERATE_YAM, STAT } from "../constants/actions";

export const set_choice = (payload) => {
  return {
    type: SET_CHOICE,
    payload,
  };
};

export const generate_yam = () => {
  return { type: GENERATE_YAM };
};

export const set_stat = (payload) => {
  return { type: STAT, payload };
};

export const throw_the_dice = () => {
  const res = [];
  let count = 0;

  // valeur min, max avec mim inclue et max exclu
  const generate = (min, max) => Math.round(Math.random() * (max - min) + min);

  while (count < 5) {
    res.push(generate(1, 6));
    count += 1;
  }

  return res;
};

export const countOccu = (res, num) => {
  
  const occurence = (res, occ) =>
    res.reduce((acc, curr) => (curr === occ ? acc + 1 : acc), 0);

  for (const number of [1, 2, 3, 4, 5, 6]) {
    if (occurence(res, number) === num) return true;
  }

  return false;
};

export const serach_double_pair = (res) => {
  const copyRes = [...res];
  const occurence = (res, occ) =>
    res.reduce((acc, curr) => (curr === occ ? acc + 1 : acc), 0);

  let double_pair = 0;

  for (const number of [1, 2, 3, 4, 5, 6]) {
    if (occurence(copyRes, number) === 2) {
      let i = 0;
      double_pair += 1;

      while (i < res.length) {
        if (copyRes[i] === number) copyRes.splice(i, 1);
        else i++;
      }
    }

    if (double_pair === 2) return true;
  }

  return false;
};
