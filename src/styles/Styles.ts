import { StyleSheet, Dimensions } from 'react-native';
import { color } from '../config/theme';

const {
	primary,
	warning,
	danger,

	lightPrimary,
	lightWarning,
	lightDanger,

	gray,
	dark,
	light,
} = color;

const space1 = 10;

export default StyleSheet.create({
	//TEXT-SIZE
	textXS: {
		fontSize: 12,
	},
	textSM: {
		fontSize: 14,
	},
	textLG: {
		fontSize: 18,
	},
	textXL: {
		fontSize: 20,
	},

	//FLEXBOX
	dFlex: {
		flex: 1,
	},
	flexRow: {
		flexDirection: 'row',
	},
	flexColumn: {
		flexDirection: 'column',
	},

	justifyBetween: {
		justifyContent: 'space-between',
	},
	flexWrap: {
		flexWrap: 'wrap',
	},

	alignItemsCenter: {
		alignItems: 'center',
	},
	alignSelfStart: {
		alignSelf: 'flex-start',
	},
	alignSelfEnd: {
		alignSelf: 'flex-end',
	},
	alignSelfCenter: {
		alignSelf: 'center',
	},

	//MARGIN
	margin: {
		margin: space1,
	},
	my: {
		marginTop: space1,
		marginBottom: space1,
	},
	mx: {
		marginLeft: space1,
		marginRight: space1,
	},
	mt: {
		marginTop: space1,
	},
	mb: {
		marginBottom: space1,
	},
	ml: {
		marginLeft: space1,
	},
	mr: {
		marginRight: space1,
	},

	//PADDING
	padding: {
		padding: space1,
	},
	p0: {
		padding: 0,
	},
	px: {
		paddingRight: space1,
		paddingLeft: space1,
	},
	py: {
		paddingTop: space1,
		paddingBottom: space1,
	},
	pr: {
		paddingRight: space1,
	},
	pl: {
		paddingLeft: space1,
	},

	//COLORS
	textPrimary: {
		color: primary,
	},
	textSecondary: {
		color: warning,
	},
	textDark: {
		color: dark,
	},
	textGray: {
		color: gray,
	},
	textLight: {
		color: light,
	},
	textWhite: {
		color: '#fff',
	},
	w100: {
		width: Dimensions.get('window').width,
	},
	w50: {
		width: (Dimensions.get('window').width) / 2,
	},
	w75: {
		width: (Dimensions.get('window').width) / 1.5,
	},

	//BACKGROUDS
	bgWhite: {
		backgroundColor: '#FFF',
	},
	bgPrimary: {
		backgroundColor: primary,
	},
	bgWarning: {
		backgroundColor: warning,
	},
	bgDanger: {
		backgroundColor: danger,
	},
	bgDark: {
		backgroundColor: dark,
	},
	bgGray: {
		backgroundColor: gray,
	},
	bgLight: {
		backgroundColor: light,
	},
	bgLightPrimary: {
		backgroundColor: lightPrimary,
	},
	bgLightWarning: {
		backgroundColor: lightWarning,
	},
	bgLightDanger: {
		backgroundColor: lightDanger,
	},
	//TEXT
	uppercase: {
		textTransform: 'uppercase',
	},
	textLeft: {
		textAlign: 'left',
	},
	textRight: {
		textAlign: 'right',
	},
	textCenter: {
		textAlign: 'center',
	},

	textDanger: {
		color: danger,
	},
	textWarning: {
		color: warning,
	},
	textBold: {
		fontWeight: 'bold',
	},

	container: {
		backgroundColor: "#fff",
		flex: 1,
		padding: space1,
	},

	//UTILS
	borderRadius: {
		borderRadius: space1,
	},
	borderRadius2: {
		borderRadius: space1 * 2,
	},
	borderTop: {
		borderTopWidth: 1,
		borderTopColor: light,
	},
	borderBottom: {
		borderBottomWidth: 1,
		borderBottomColor: light,
	},

	maxWidth250: {
		maxWidth: 250,
	},
});
