import React, { useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from './styles'
import { useMainContext } from '../../context'
import { calcValue } from '../../utils/calcValue'

const Row = ({ cell, head }) => {
	const [count, setCount] = useState(0)
	const { mode, wbc, total, setTotal, maxCount } = useMainContext()
	const clickHandler = () => {
		if (!head) {
			if (total === maxCount) {
				alert('Максимальное значение !')
				return
			}
			setCount(count + 1)
			setTotal(total + 1)
		}
	}
	return (
		<TouchableHighlight onPress={clickHandler}>
			<View style={head ? [styles.row, styles.head] : styles.row}>
				<Text style={styles.text}>{head ? 'cell' : cell}</Text>
				<Text style={styles.text}>{head ? 'count' : count}</Text>
				<Text style={styles.text}>
					{head
						? 'relative'
						: count &&
						  `${calcValue({ count, total, wbc }).relative.toFixed(2)}%`}
				</Text>
				<Text style={styles.text}>
					{head
						? 'absolute'
						: count &&
						  wbc &&
						  calcValue({ count, total, wbc }).absolute.toFixed(2)}
				</Text>
			</View>
		</TouchableHighlight>
	)
}

export default Row
