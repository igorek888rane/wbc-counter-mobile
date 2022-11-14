import React from 'react'
import Table from './Table/Table'
import { StatusBar } from 'expo-status-bar'
import {
	RefreshControl,
	SafeAreaView,
	ScrollView,
	StyleSheet,
} from 'react-native'
import Setting from './Setting/Setting'
import { useMainContext } from '../context'

const Main = () => {
	const {
		cells,
		setTotal,
		setMode,
		setWbc,
		setMaxCount,
		setCells,
		setListData,
	} = useMainContext()
	const defaultValue = () => {
		setTotal(0)
		setMode(true)
		setWbc(0)
		setMaxCount(100)
		setCells(['Neutrophil', 'Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
		setListData(cells.map((cell, i) => ({ key: `${i}`, cell })))
	}
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={false} onRefresh={defaultValue} />
				}
			>
				<Setting />
				<Table />
				<StatusBar style={'auto'} />
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#242d43',
		paddingTop: StatusBar.currentHeight,
	},
})
export default Main
