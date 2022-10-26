import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const App = () => (
	<View style={styles.container}>
		<Text style={{ color: '#fff', marginTop: 50 }}>Hello world!</Text>
		<StatusBar style={'auto'} />
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#242d43',
		alignItems: 'center'
	}
})
export default App
