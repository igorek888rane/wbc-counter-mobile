import React from 'react'
import { View } from 'react-native'
import Row from './Row'

const TableHead = () => {
	return (
		<View>
			<Row head={true} />
		</View>
	)
}

export default TableHead
