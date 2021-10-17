export const fizzBuzz = (num: number) => {
    if (num >= 1 && num <= 100){
        if (num % 3 === 0 && num % 5 === 0) { return "FizzBuzz" }
        if (num % 3 === 0) { return "Fizz" }
        if (num % 5 === 0) { return "Buzz" }
        return num
    }
    else { return Error }
};

// genera un array de 100 elementos según las especificaciones de FizzBuzz
export const getArray = () => {
    const start = 1
    const end = 100
    const array: Array<string|number|ErrorConstructor> = []
    for (let _i = start; _i <= end; _i++) {
        array.push(fizzBuzz(_i))
    }
    return array;
};
