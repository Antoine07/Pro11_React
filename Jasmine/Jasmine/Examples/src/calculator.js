
export default class Calculator{

    multiply (a, b)
    {
        return a * b;
    }

     divide(a, b){
        
        if (b == 0) 
            throw new Error("Don't try to divide by zero!");

        return Math.round(a / b);
    }
}

