import { fizzBuzz, getArray } from '../src/fizzbuzz'
import 'jest-extended';

describe('FizzBuzz', () => {
    it('should return Error numbers out of range', () => {   
        expect(fizzBuzz(0, [-1, 0, 101, 500])).toEqual(Array(4).fill(Error))
    })
    it('should return Fizz divible by 3', () => {        
        expect(fizzBuzz(0, [3, 9, 33, 99])).toEqual(Array(4).fill("Fizz"))
    })
    it('should return Buzz divible by 5', () => {
        expect(fizzBuzz(0, [5, 10, 55, 100])).toEqual(Array(4).fill("Buzz"))        
    })
    it('should return Buzz divible by 3 and 5', () => {
        expect(fizzBuzz(0, [15, 45])).toEqual(Array(2).fill("FizzBuzz"))
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
