export const calcValue = ({ count, total, wbc }) => {
	const relative = (count * 100) / total
	const absolute = (relative * wbc) / 100
	return { relative, absolute }
}
