import React, { useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from './styles'
import { useMainContext } from '../../context'
import { calcValue } from '../../utils/calcValue'
import { useTotal } from '../../hooks/useTotal'
import { changeCount } from '../../utils/changeCount'

const Row = ({ cell, head }) => {
	const [count, setCount] = useState(0)
	const { mode, wbc, total, setTotal, maxCount } = useMainContext()
	const clickHandler = () => {
		if (!head) {
			changeCount({ mode, total, count, maxCount, setCount, setTotal })
		}
	}
	useTotal({ total, setCount })
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
