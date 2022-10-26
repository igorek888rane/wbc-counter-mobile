import React from 'react'
import { View } from 'react-native'
import Row from './Row'

const TableBody = () => {
	const cells = [
		'Neutrophil',
		'Monocyte',
		'Lymphocyte',
		'Eosinophil',
		'Basophil'
	]
	return (
		<View>
			{cells.map(cell => (
				<Row head={false} key={cell} cell={cell} />
			))}
		</View>
	)
}

export default TableBody
