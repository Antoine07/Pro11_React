const delay = (ms) =>
  new Promise((res) => {
    setTimeout(() => res(1), ms);
  });

// delay(500).then( r => console.log(r));

// En utilisant la promesse delay et uniquement celle-ci ci-dessus additionner 1 + 1

// delay(500).then( r1 => {

//     delay(500).then( r2 => console.log(r1 + r2))
// });

// Promise.all([delay(500), delay(500)]).then( results => console.log(results));

// async await
async function asyncAll() {
  let sum = 0;
  const n1 = await delay(1500);
  sum += n1;
  console.log("n1", sum);
  const n2 = await delay(500);
  sum += n2;
  console.log("n2", sum);
  const n3 = await delay(500);
  sum += n3;
  console.log("n3", sum);

  // error
  await Promise.reject( new Error('Reject ICI'));

  const n4 = await delay(500);
  sum += n4;
  console.log("n4", sum);
  const n5 = await delay(500);
  sum += n5;
  console.log("Total", sum);

  return sum;
}

asyncAll()
  .then((r) => console.log("super total", r))
  .catch((err) => console.log(err)); // On cache les erreurs ça arrête le processus 
