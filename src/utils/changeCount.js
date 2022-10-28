export const changeCount = ({
	mode,
	total,
	count,
	maxCount,
	setCount,
	setTotal
}) => {
	if (mode) {
		if (total === maxCount) {
			alert('Максимальное значение !')
			return
		}
		setCount(count + 1)
		setTotal(total + 1)
	} else {
		if (count === 0) return
		setCount(count - 1)
		setTotal(total - 1)
	}
}
