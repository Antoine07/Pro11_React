"use strict";

import Calculator from './../src/calculator.js';

// globaliser les variables au script entier
let data, op ;
describe("Arithmetic tests", () => {

    // avant chaque test
    beforeEach(function () {
        op = new Calculator;
        data = [
            { a: 12, b: 13 },
            { a: 7, b: 9 },
            { a: 15, b: 9 },
            { a: 100, b: 13 },
            { a: 7, b: 46 }
        ];
    });

    it("test multiply", () => {
        for(const {a, b} of data){
            expect(op.multiply(a, b)).toBe(a * b);
        }
    });

    it("test divide", () => {
        for(const {a, b} of data){
            expect(op.divide(a, b)).toBe(Math.round(a / b));
        }
    });

    it("contains spec with an expectation", function() {
       
        expect(() => op.divide(2,0)).toThrow(new Error("Don't try to divide by zero!"));
      });
});