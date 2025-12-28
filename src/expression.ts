export function canonicalize(s: string): string {
	if (!(s.startsWith("(") && s.endsWith(")"))) return s

	const inner = s.substring(1, s.length - 1)

	let bal = 0
	let oi = -1

	for (let i = 0; i < inner.length; i++) {
		const c = inner.charAt(i)
		if (c === "(") bal++
		else if (c === ")") bal--
		else if (bal === 0 && "+-*/".includes(c)) {
			oi = i
			break
		}
	}

	if (oi === -1) return s

	let l = canonicalize(inner.substring(0, oi))
	let r = canonicalize(inner.substring(oi + 1))
	const op = inner.charAt(oi)

	if (op === "+" || op === "*") {
		if (l > r) {
			const t = l
			l = r
			r = t
		}
	}

	return `(${l}${op}${r})`
}
