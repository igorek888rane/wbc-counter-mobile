import React, { useState } from 'react'
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useMainContext } from '../../context'

const Setting = () => {
	const { mode, setMode, cells, wbc, setCells, setWbc, maxCount, setMaxCount } =
		useMainContext()

	const [add, setAdd] = useState('')
	const addCell = () => {
		if (add) {
			setCells([...cells, add])
			setAdd('')
		}
		Keyboard.dismiss()
	}
	return (
		<View style={styles.setting}>
			<View style={styles.block}>
				<TextInput style={styles.input} onChangeText={setWbc} value={wbc} />
				<Text style={[styles.text, styles.text_no_btn]}>10⁹/L</Text>
			</View>
			<View style={styles.block}>
				<TextInput
					style={styles.input}
					onChangeText={setMaxCount}
					value={String(maxCount)}
					keyboardType='numeric'
				/>
				<Text style={[styles.text, styles.text_no_btn]}>Max</Text>
			</View>
			<View style={styles.block}>
				<TextInput style={styles.input} onChangeText={setAdd} value={add} />
				<TouchableOpacity style={styles.btn} onPress={addCell}>
					<Text style={styles.text}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Setting
