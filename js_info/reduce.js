

const notes = [10, 16, 17, 18];

const sum = notes.reduce((acc, curr) => acc + curr);

console.log(sum);

const notes2 = [{ note : 18}, { note : 13}, { note : 19}];

// deux paramètres dans reduce une fonction (prev, curr) => on fait un calcul 
// et on peut mettre une valeur au deuxième paramètre (faculatif), ci-dessous on initialise cette valeur à 0
const sum2 = notes2.reduce((acc, curr) => acc + curr.note, 0);

console.log(sum2);