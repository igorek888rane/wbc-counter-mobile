import React from 'react'
import { Text, View } from 'react-native'
import Row from './Row'
import { useMainContext } from '../../context'
import { styles } from './styles'

const TableBody = () => {
	const { cells, setCells, total, setTotal, maxCount } = useMainContext()
	return (
		<View>
			{cells.map(cell => (
				<Row head={false} key={cell} cell={cell} />
			))}
			<View style={styles.row_total}>
				<Text style={styles.text_total}>
					{total}/{maxCount}
				</Text>
			</View>
		</View>
	)
}

export default TableBody
