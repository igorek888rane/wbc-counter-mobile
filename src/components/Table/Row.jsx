import React, { useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from './styles'

const Row = ({ cell, head }) => {
	const [count, setCount] = useState(0)
	return (
		<TouchableHighlight onPress={() => setCount(count + 1)}>
			<View style={head ? styles.row_head : styles.row}>
				<Text style={styles.text}>{head ? 'cell' : cell}</Text>
				<Text style={styles.text}>{head ? 'count' : count}</Text>
				<Text style={styles.text}>{head ? 'relative' : 0}</Text>
				<Text style={styles.text}>{head ? 'absolute' : 0}</Text>
			</View>
		</TouchableHighlight>
	)
}

export default Row
