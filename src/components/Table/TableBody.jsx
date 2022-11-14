import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Row from './Row'
import { useMainContext } from '../../context'
import { styles } from './styles'
import { SwipeListView } from 'react-native-swipe-list-view'

const TableBody = () => {
	const { cells, total, maxCount, setTotal, setCells, listData, setListData } =
		useMainContext()

	const deleteRow = (rowMap, rowKey) => {
		// setTotal(total - count)
		const newData = [...listData]
		const prevIndex = listData.findIndex(item => item.key === rowKey)
		newData.splice(prevIndex, 1)
		setListData(newData)
	}

	return (
		<View>
			<SwipeListView
				disableRightSwipe
				data={listData}
				renderItem={data => <Row head={false} cell={data.item.cell} />}
				renderHiddenItem={(data, rowMap) => (
					<TouchableHighlight
						onPress={() => deleteRow(rowMap, data.item.key)}
						style={styles.delete}
					>
						<Text style={styles.text_delete}>Delete</Text>
					</TouchableHighlight>
				)}
				rightOpenValue={-75}
			/>
			<View style={[styles.row, styles.total]}>
				<Text style={[styles.text, styles.text_center]}>
					{total}/{maxCount}
				</Text>
			</View>
		</View>
	)
}

export default TableBody
