import { NegativeInputError, TooFewInputError, TooManyInputError } from "./exceptions"
import { canonicalize } from "./expression"

const OPS = ["+", "-", "*", "/"]
const INPUT_LEN = 4

function validateInput(inp: number[]): void {
	if (inp.length !== INPUT_LEN) {
		if (inp.length > INPUT_LEN) throw new TooManyInputError(inp, INPUT_LEN)
		else throw new TooFewInputError(inp, INPUT_LEN)
	}

	if (inp.some((x) => x < 0)) throw new NegativeInputError()
}

function abCalc(a: number, b: number, op: string) {
	switch (op) {
		case "+":
			return a + b
		case "-":
			return a - b
		case "*":
			return a * b
		case "/":
			return a / b
		default:
			return 0
	}
}

export function solve(inp: number[]) {
	const ans: Set<string> = new Set()
	function solveRecur(num: number[], p: string[]) {
		if (num.length === 1) {
			const cp = canonicalize(p[0])
			if (Math.abs(num[0] - 24) < 0.0001) ans.add(cp)
			return
		}

		for (let i = 0; i < num.length; i++) {
			for (let j = 0; j < num.length; j++) {
				if (i === j) continue

				for (let oi = 0; oi < OPS.length; oi++) {
					const op = OPS[oi]
					if (op === "/" && Math.abs(num[j]) < 0.0001) continue

					const np: string[] = []
					const nn: number[] = []

					for (let k = 0; k < num.length; k++) {
						if (k !== i && k !== j) {
							nn.push(num[k])
							np.push(p[k])
						}
					}

					const a = num[i]
					const b = num[j]

					const val = abCalc(a, b, op)
					const ex = `(${p[i]}${op}${p[j]})`

					nn.push(val)
					np.push(ex)

					solveRecur(nn, np)
				}
			}
		}
	}

	validateInput(inp)

	solveRecur(
		inp,
		inp.map((x) => x.toString())
	)

	return Array.from(ans)
}
