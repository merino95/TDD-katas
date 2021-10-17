export const fizzBuzz = (aNumber: number, numbers?: number[]) => {
    if (numbers === undefined) {
        return fizzBuzzForNumber(aNumber);
    } else {
        return numbers.map(n => fizzBuzzForNumber(n));
    }
};

export const fizzBuzzForNumber = (num: number) => {
    if (num >= 1 && num <= 100) {
        if(isDivisibleBy3(num) && isDivisibleBy5(num)) {
            return 'FizzBuzz'
        }
        if(isDivisibleBy3(num)) {
            return 'Fizz'
        }
        if(isDivisibleBy5(num)) {
            return 'Buzz'
        }
        return num.toString();
    }
    else { return Error }
};

const isDivisibleBy = (divisor: number) => (n: number) => n%divisor === 0
const isDivisibleBy3 = isDivisibleBy(3)
const isDivisibleBy5 = isDivisibleBy(5)

// genera un array de 100 elementos según las especificaciones de FizzBuzz
export const getArray = () => {
    const start = 1
    const end = 100
    const array: Array<string|ErrorConstructor> = []
    for (let _i = start; _i <= end; _i++) {
        array.push(fizzBuzzForNumber(_i))
    }
    return array;
};
