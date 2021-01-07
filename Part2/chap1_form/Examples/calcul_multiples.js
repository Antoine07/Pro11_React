
const MAX_MULTIPLE = 100;
const number = 11;
const multiples = [];
let count = 1 ; 

let multiple = number * count;

while( multiple  < MAX_MULTIPLE){
    multiples.push( multiple );
    count++;
    multiple = number * count;
}


console.log(multiples);

/*

11*1 
11*2 
11*3 
...


*/
