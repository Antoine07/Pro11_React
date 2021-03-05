
const countOccu = (res, num) => {
    const occurence = (res, occ) =>
      res.reduce((acc, curr) => (curr === occ ? acc + 1 : acc), 0);
    for (const number of [1, 2, 3, 4, 5, 6]) {
       
      if (occurence(res, number) === num) return true;
    }
  
    return false;
  };


  const occurence = (res, occ) =>
  res.reduce((acc, curr) => (curr === occ ? acc + 1 : acc), 0);

  console.log(occurence( [4, 4, 4, 2, 2], 5));