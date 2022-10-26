import React from 'react'
import { View } from 'react-native'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { styles } from './styles'

const Table = () => {
	return (
		<View style={styles.table}>
			<TableHead />
			<TableBody />
		</View>
	)
}

export default Table
