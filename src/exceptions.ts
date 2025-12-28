class InputError extends RangeError {
	constructor(message?: string) {
		super(message || "Unexpected or wrong input supplied")
		this.name = "InputError"
	}
}

export class TooManyInputError extends InputError {
	constructor(arr: unknown[], maxLen: number) {
		const s = `[${arr.join(", ")}]`
		super(`Too many input provided: ${s} (${arr.length} of ${maxLen})`)
		this.name = "TooManyInputError"
	}
}

export class TooFewInputError extends InputError {
	constructor(arr: unknown[], minLen: number) {
		const s = `[${arr.join(", ")}]`
		super(`Too few input provided: ${s} (${arr.length} of ${minLen})`)
		this.name = "TooFewInputError"
	}
}

export class NegativeInputError extends InputError {
	constructor() {
		super(`Input contains negative number!`)
		this.name = "NegativeInputError"
	}
}
