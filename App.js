import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Table from './src/components/Table/Table'
import ContextProvider from './src/context'

const App = () => (
	<ContextProvider>
		<View style={styles.container}>
			<Table />
			<StatusBar style={'auto'} />
		</View>
	</ContextProvider>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#242d43',
		alignItems: 'center'
	}
})
export default App
