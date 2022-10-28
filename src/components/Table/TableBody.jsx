import React from 'react'
import { Text, View } from 'react-native'
import Row from './Row'
import { useMainContext } from '../../context'
import { styles } from './styles'

const TableBody = () => {
	const { cells, total, maxCount } = useMainContext()
	return (
		<View>
			{cells.map(cell => (
				<Row head={false} key={cell} cell={cell} />
			))}
			<View style={[styles.row, styles.total]}>
				<Text style={[styles.text, styles.text_center]}>
					{total}/{maxCount}
				</Text>
			</View>
		</View>
	)
}

export default TableBody
