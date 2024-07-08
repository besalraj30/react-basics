import { sum } from "../sum"

test("SUm function should calculate sum of two numbes", () => {
    const result = sum(3,4);

    //  Assertion
    expect(result).toBe(7);
})