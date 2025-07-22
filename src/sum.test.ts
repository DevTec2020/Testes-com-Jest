import { sum } from "./server"

test("sum", () => {
    const result = sum(3, 7)

    expect(result).toBe(10)

})