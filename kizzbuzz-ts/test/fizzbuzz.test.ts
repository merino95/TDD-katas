import { fizzBuzz, getArray } from '../src/fizzbuzz'
import 'jest-extended';

describe('FizzBuzz', () => {
    it('should return Error numbers out of range', () => {  
        const numbersTest:number[] = [-1, 0, 101, 500]
        numbersTest.forEach(num => {     
            expect(fizzBuzz(num)).toEqual(Error);
        });
    })
    it('should return Fizz divible by 3', () => {
        const numbersTest:number[] = [3, 9, 33, 99]
        numbersTest.forEach(num => {
            expect(fizzBuzz(num)).toEqual("Fizz")
        });
    })
    it('should return Buzz divible by 5', () => {
        const numbersTest:number[] = [5, 10, 55, 100]
        numbersTest.forEach(num => {
            expect(fizzBuzz(num)).toEqual("Buzz")
        });
    })
    it('should return Buzz divible by 3 and 5', () => {
        const numbersTest:number[] = [15, 45]
        numbersTest.forEach(num => {
            expect(fizzBuzz(num)).toEqual("FizzBuzz")
        });
    })
})

describe('PrintArray', () => {
    // it('should return array', () => { 
    //     expect(getArray()).not.toBeArray();
    // })
    it('should return array with 100 items', () => { 
        expect(getArray()).toHaveLength(100)
    })
    // it('not should return divisible by 3', () => { 
    //     // const numbersTest:(string|number|ErrorConstructor)[] = [3, 9, 33, 99]
    //     expect(getArray()).not.toIncludeAnyMembers([3]);
    // })
})
