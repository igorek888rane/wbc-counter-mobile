import React from 'react'
import Table from './Table/Table'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Setting from './Setting/Setting'

const Main = () => {
	return (
		<View style={styles.container}>
			<Setting />
			<Table />
			<StatusBar style={'auto'} />
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#242d43',
		alignItems: 'center'
	}
})
export default Main
