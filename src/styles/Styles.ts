import { StyleSheet, Dimensions } from 'react-native';

export const primaryColor = "#4FB586";
export const warningColor = "#E69810";
export const dangerColor = "#E10A0A";

export const darkColor = "#171717";
export const grayColor = "#606060";
export const lightColor = "#f1f1f1";

export const lightPrimaryColor = "#E3F2EB";
export const lightWarningColor = "#F4F6E4";
export const lightDangerColor = "#F2E3E3";

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
        color: primaryColor,
    },
    textSecondary: {
        color: warningColor,
    },
    textDark: {
        color: darkColor,
    },
    textGray: {
        color: grayColor,
    },
    textLight: {
        color: lightColor,
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
        backgroundColor: primaryColor,
    },
    bgWarning: {
        backgroundColor: warningColor,
    },
    bgDanger: {
        backgroundColor: dangerColor,
    },
    bgDark: {
        backgroundColor: darkColor,
    },
    bgGray: {
        backgroundColor: grayColor,
    },
    bgLight: {
        backgroundColor: lightColor,
    },
    bgLightPrimary: {
        backgroundColor: lightPrimaryColor,
    },
    bgLightWarning: {
        backgroundColor: lightWarningColor,
    },
    bgLightDanger: {
        backgroundColor: lightDangerColor,
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
        color: dangerColor,
    },
    textWarning: {
        color: warningColor,
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
        borderTopColor: lightColor,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: lightColor,
    },

    maxWidth250: {
        maxWidth: 250,
    },
});
