import { useEffect } from 'react'

export const useTotal = ({ total, setCount }) => {
	useEffect(() => {
		if (!total) setCount(0)
	}, [total])
}
