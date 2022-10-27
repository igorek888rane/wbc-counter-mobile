export const changeCount = ({
	mode,
	total,
	count,
	subCount,
	maxCount,
	setCount,
	setSubCount,
	setTotal
}) => {
	if (mode) {
		if (total === maxCount) {
			alert('Максимальное значение !')
			return
		}
		setCount(count + 1)
		setTotal(total + 1)
		if (setSubCount) {
			if (subCount || subCount === 0) setSubCount(subCount + 1)
		}
	} else {
		if (subCount === 0 || count === 0) return
		setCount(count - 1)
		setTotal(total - 1)
		if (subCount && setSubCount) {
			setSubCount(subCount - 1)
		}
	}
}
