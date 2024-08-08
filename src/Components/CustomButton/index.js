import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TextView from '../TextView';
import { IMAGES } from '../../Constants/IMAGES';

const { width, height } = Dimensions.get('screen');

const CustomButton = () => {
    return (
        <TouchableOpacity style={styles.cont}>
            <TextView label={'BUY WITH '} />
            <Image source={IMAGES.shopPay} style={styles.shopPay} />
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    shopPay: {
        resizeMode: 'contain',
        width: width * 0.15,
        height: width * 0.08,
        tintColor: '#fff',
    },
    cont: {
        backgroundColor: '#5A31F4',
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
    },
});