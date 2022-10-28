import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	table: {
		backgroundColor: '#161c2f',
		marginTop: 50,
		width: '100%',
		borderRadius: 25,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 25,
		backgroundColor: '#242d43',
		borderRadius: 50,
		marginTop: 5,
		marginBottom: 5,
	},
	head: {
		marginTop: 0,
		marginBottom: 0,
		backgroundColor: '#161c2f',
	},
	total: {
		justifyContent: 'center',
	},
	text: {
		fontSize: 12,
		textAlign: 'start',
		color: '#fff',
		width: 90,
	},
	text_center: {
		textAlign: 'center',
	},
})
