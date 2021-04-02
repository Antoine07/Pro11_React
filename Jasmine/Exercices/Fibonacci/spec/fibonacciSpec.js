"use strict";

import fibonacci from '../src/fibonacci.js';

let numbersFibonacci = [];
describe("Fibonacci tests", () => {

    // avant chaque test
    beforeEach(function () {
       numbersFibonacci = [1,1,2,3, 5, 8, 13, 21, 34, 55, 89 ];
    });

    it('fibonacci 2 firsts array [1], [1,1]', () => {
        expect(fibonacci(1)).toEqual([1]);
        expect(fibonacci(2)).toEqual([1,1]);
    });

    it('fibonacci n >= 3', () => {
        let n = 3, numbers ;
        while(n < 11 && n >= 3){
            numbers = fibonacci(n);
            expect(numbers[n-1]).toBe( numbersFibonacci[n-2] + numbersFibonacci[n-3]);
            n += 1;
        }
    });
});