import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    flat: {
        marginVertical: 15,
    },
    icon2: {
        resizeMode: 'contain',
        width: width * 0.05,
        height: width * 0.05,
    },
    iconView2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    renderImage: {
        resizeMode: 'cover',
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: 10,
    },
    star: {
        resizeMode: 'contain',
        width: width * 0.05,
        height: width * 0.05,
    },
    upArrow: {
        resizeMode: 'contain',
        width: width * 0.08,
        height: width * 0.08,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bgInner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 10,
    },
    arrow: {
        resizeMode: 'contain',
        width: width * 0.1,
        height: width * 0.05,
    },
    woreBy: {
        overflow: 'hidden',
        borderRadius: 10,
        width: width * 0.9,
        height: height * 0.2,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    line: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginVertical: 5,
    },
    shopPay: {
        resizeMode: 'contain',
        width: width * 0.15,
        height: width * 0.08,
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        resizeMode: 'contain',
        width: width * 0.08,
        height: width * 0.08,
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    cont: {
        width: width,
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: width * 0.05,
        overflow: 'visible',
    },
});

export default styles;