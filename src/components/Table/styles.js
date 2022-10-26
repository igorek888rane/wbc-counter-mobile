import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	table: {
		backgroundColor: '#161c2f',
		marginTop: 50,
		width: '98%',
		borderRadius: 25
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 25,
		backgroundColor: '#242d43',
		borderRadius: 50,
		marginTop: 5,
		marginBottom: 5
	},
	row_head: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 25,
		backgroundColor: '#161c2f',
		borderRadius: 50
	},
	text: {
		fontSize: 12,
		textAlign: 'start',
		color: '#fff',
		width: 90
	}
})