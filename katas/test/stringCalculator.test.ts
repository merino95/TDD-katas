import { stringCalculator } from '../src/stringCalculator'

describe('StringCalculator', () => {
    it('should return Error numbers out of range', () => {  
        expect(stringCalculator("")).toEqual(0);
    })
})