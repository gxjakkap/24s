import { NegativeInputError, TooFewInputError, TooManyInputError } from "../src/exceptions"
import { solve } from "../src/index"

describe("solve(): Solve 24 Game", () => {
	test("This should return valid solutions for 6 6 6 6.", () => {
		expect(new Set(solve([6, 6, 6, 6]))).toEqual(
			new Set(["(((6*6)-6)-6)", "(((6+6)+6)+6)", "((6*6)-(6+6))", "((6+6)+(6+6))"])
		)
	})

	test("This should return valid solutions for 12 1 1 1.", () => {
		expect(new Set(solve([12, 1, 1, 1]))).toEqual(
			new Set([
				"(((1*1)+1)*12)",
				"(((1+1)*1)*12)",
				"(((1+1)*12)*1)",
				"(((1+1)*12)/1)",
				"(((1+1)/1)*12)",
				"(((1/1)+1)*12)",
				"((1*12)*(1+1))",
				"((1+1)*(12/1))",
				"((1+1)/(1/12))",
				"(12/(1/(1+1)))",
			])
		)
	})

	test("This should return valid solutions for 9 9 9 9 (no solution).", () => {
		expect(new Set(solve([9, 9, 9, 9]))).toEqual(new Set([]))
	})

	test("This should throw TooFewInputError.", () => {
		expect(() => solve([1])).toThrow(TooFewInputError)
	})

	test("This should throw TooManyInputError.", () => {
		expect(() => solve([1, 1, 1, 1, 1])).toThrow(TooManyInputError)
	})

	test("This should throw NegativeInputError.", () => {
		expect(() => solve([1, -1, 1, 1])).toThrow(NegativeInputError)
	})
})
