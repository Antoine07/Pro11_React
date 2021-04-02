
export default function fibonacci(n) {

    if(n === 1) return [1];
    if(n === 2) return [1, 1];

    const numbers = [1, 1] ;
    let i = 0;

    while( i < (n-2) ){
        numbers.push(numbers[i] + numbers[i + 1]);
        i += 1;
    }

    return numbers;

}