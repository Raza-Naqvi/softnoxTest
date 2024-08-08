import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    cart: {
        resizeMode: 'contain',
        width: width * 0.15,
        height: height * 0.10,
    },
    cartView: {
        position: 'absolute',
        bottom: width * 0.15,
        right: 20
    },
    head: {
        alignItems: 'center'
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    icon: {
        resizeMode: 'contain',
        width: width * 0.07,
        height: width * 0.07,
    },
    bg: {
        width: width,
        height: height,
        paddingHorizontal: width * 0.05,
    },
});

export default styles;