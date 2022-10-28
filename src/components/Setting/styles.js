import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	setting: {
		alignItems: 'center',
	},
	input: {
		padding: 10,
		borderRadius: ' 25px',
		borderWidth: 1,
		width: '70%',
		color: '#fff',
		marginRight: 10,
	},
	block: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},
	block_btn: {},
	btn: {
		borderRadius: 25,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderWidth: 2,
		backgroundColor: '#242d43',
		borderColor: '#161c2f',
	},
	btn_active: {
		backgroundColor: '#fff',
	},
	text: {
		color: '#fff',
	},
	text_active: {
		color: '#242d43',
	},
})
