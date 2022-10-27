import { createContext, useContext, useMemo, useState } from 'react'

const MainContext = createContext({})

export const useMainContext = () => useContext(MainContext)

const ContextProvider = ({ children }) => {
	const [mode, setMode] = useState(true)
	const [cells, setCells] = useState([
		'Neutrophil',
		'Monocyte',
		'Lymphocyte',
		'Eosinophil',
		'Basophil'
	])
	const [wbc, setWbc] = useState(0)
	const [maxCount, setMaxCount] = useState(100)
	const [total, setTotal] = useState(0)
	const value = useMemo(
		() => ({
			mode,
			setMode,
			cells,
			setCells,
			wbc,
			setWbc,
			maxCount,
			setMaxCount,
			total,
			setTotal
		}),
		[mode, cells, wbc, maxCount, total]
	)
	return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
export default ContextProvider
