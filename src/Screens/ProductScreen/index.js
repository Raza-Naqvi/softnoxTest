import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { IMAGES } from '../../Constants/IMAGES';
import styles from './styles';
import TextView from '../../Components/TextView';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../Constants/Screens';

const ProductScreen = () => {
    const nav = useNavigation();

    const handleSwipe = ({ nativeEvent }) => {
        if (nativeEvent.translationY < -50) {
            nav.navigate(Screens.ProductDetailScreen);
        };
    };

    return (
        <PanGestureHandler onGestureEvent={handleSwipe}>
            <View>
                <ImageBackground source={IMAGES.dressBg} resizeMode='contain' style={styles.bg}>
                    <View style={styles.headerView}>
                        <Image source={IMAGES.menu} style={styles.icon} />
                        <View style={styles.head}>
                            <TextView label={'String & Thread'} head={true} />
                            <TextView label={'PREMIUM STITCHED'} head={true} />
                        </View>
                        <View />
                    </View>
                    <View style={styles.cartView}>
                        <Image source={IMAGES.cart} style={styles.cart} />
                        <Image source={IMAGES.swipe} style={styles.cart} />
                    </View>
                </ImageBackground>
            </View>
        </PanGestureHandler>
    );
};

export default ProductScreen;