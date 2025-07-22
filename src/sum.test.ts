import { sum } from "./server"

describe ("sum", () => {
    let sumResult: number

    // O beforeAll é usado para quando queremos executar algo antes dos codigos 
    beforeAll(() => {
        sumResult = 10
    })

    it(" should sum of 3 + 7 must be 10", () => {
        const result = sum(3, 7)
    
        expect(result).toBe(sumResult)
    
    })
    
    test("sum of 2 + 2 most be 4", () => {
        const result = sum(2,2)
    
        expect(result).toBe(4)
    })

})
