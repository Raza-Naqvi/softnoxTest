import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, ImageBackground, FlatList } from 'react-native';
import { NativeViewGestureHandler, PanGestureHandler } from 'react-native-gesture-handler';
import { Screens } from '../../Constants/Screens';
import styles from './styles';
import { IMAGES } from '../../Constants/IMAGES';
import CustomButton from '../../Components/CustomButton';
import TextView from '../../Components/TextView';

const ProductDetailScreen = () => {
    const scrollRef = useRef(null);
    const nav = useNavigation();

    const handleSwipe = ({ nativeEvent }) => {
        if (nativeEvent.translationY > 50) {
            nav.navigate(Screens.ProductScreen);
        };
    };

    return (
        <PanGestureHandler onGestureEvent={handleSwipe} waitFor={scrollRef}>
            <View style={{ flex: 1 }}>
                <NativeViewGestureHandler ref={scrollRef} simultaneousHandlers={scrollRef}>
                    <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef} style={styles.cont}>
                        <View style={styles.iconView}>
                            <Image source={IMAGES.upload} style={[styles.icon, { marginRight: 5 }]} />
                            <Image source={IMAGES.heart} style={styles.icon} />
                        </View>
                        <CustomButton />
                        <TextView link={true} label={'More payment options'} textAlign={'center'} />
                        <View style={styles.textView}>
                            <TextView body={true} label={'Pay in 4 interest-free installments of $35.98 with '} />
                            <Image source={IMAGES.shopPay} style={styles.shopPay} />
                        </View>
                        <TextView link={true} label={'Learn More'} />
                        <View style={styles.line} />
                        <TextView body={true} label={'Pickup available at Hillcroft - Houston, TX'} />
                        <TextView body={true} label={'Usually ready in 2 hours'} />
                        <TextView link={true} label={'View store information'} />
                        <View style={{ marginVertical: 5 }} />
                        <TextView body={true} label={'Dress Type: 3 Pieces (Top + Pants + Dupatta)'} />
                        <TextView body={true} label={'Top Fabric: Dobby Lawn'} />
                        <TextView body={true} label={'Sleeves Fabric: Dobby Lawn'} />
                        <TextView body={true} label={'Shirt & Sleeves Lining: Attached'} />
                        <TextView body={true} label={'Dupatta Fabric: Chiffon'} />
                        <TextView body={true} label={`* String & Thread retails all Original brands products and all dresses / tops are stitched as shown in picture unless stated otherwise.`} />
                        <TextView body={true} label={`* String & Thread does not sell any unstitched item(s)`} />
                        <TextView body={true} label={`* Any Unstitched collection item(s) are premiumly stitched by String & Thread; and have extra fabric inside to alter the item(s) one size up or down.`} />
                        <View style={{ marginVertical: 5 }} />
                        <TextView link={true} label={'Download Size Chart'} />
                        <View style={{ marginVertical: 5 }} />
                        <TextView head={true} label={'As Wore By'} color={'#000'} />
                        <ImageBackground source={IMAGES.woreBy} resizeMode='cover' style={styles.woreBy}>
                            <View style={styles.bgInner}>
                                <TextView head={true} label={'As Wore By'} color={'#000'} />
                                <Image source={IMAGES.arrow} style={styles.arrow} />
                            </View>
                        </ImageBackground>
                        <View style={styles.row}>
                            <TextView head={true} label={'Rating & Reviews'} color={'#000'} />
                            <Image source={IMAGES.upArrow} style={styles.upArrow} />
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.row, { width: '12%' }]}>
                                <Image source={IMAGES.star} style={styles.star} />
                                <TextView body={true} label={'4.5'} />
                            </View>
                            <View style={[styles.row, { width: '70%', }]}>
                                <TextView body={true} label={`The dress looks the same as shown. Must own, a must have dress.`} />
                            </View>
                        </View>
                        <View style={styles.row}>
                            <TextView head={true} label={'Sara'} color={'#000'} />
                            <View style={[styles.row, { width: '70%', }]}>
                                <TextView body={true} label={`21 Jun, 2023`} />
                                <View style={[styles.row, { width: '25%', }]}>
                                    <Image source={IMAGES.thumb} style={styles.upArrow} />
                                    <TextView body={true} label={`19`} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.row}>
                            <TextView head={true} label={'Sara'} color={'#000'} />
                            <View style={[styles.row, { width: '70%', }]}>
                                <TextView body={true} label={`21 Jun, 2023`} />
                                <View style={[styles.row, { width: '25%', }]}>
                                    <Image source={IMAGES.thumb} style={styles.upArrow} />
                                    <TextView body={true} label={`19`} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.line} />
                        <TextView head={true} label={'See all review'} color={'#000'} />
                        <View style={styles.line} />
                        <TextView head={true} label={'Related Products'} color={'#000'} />
                        <FlatList
                            data={[0, 0, 0, 0, 0]}
                            keyExtractor={(item, key) => key}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginRight: 10 }}>
                                        <Image source={IMAGES.dressBg} style={styles.renderImage} />
                                        <TextView head={true} label={'MARIA B'} color={'#000'} />
                                        <TextView body={true} label={'EL-23-10'} />
                                        <TextView head={true} label={'$209.95'} color={'#000'} />
                                    </View>
                                );
                            }}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={styles.flat}
                        />
                        <View style={styles.iconView2}>
                            <Image source={IMAGES.fb} style={styles.icon2} />
                            <Image source={IMAGES.twitter} style={styles.icon2} />
                            <Image source={IMAGES.pinterest} style={styles.icon2} />
                        </View>
                        <View style={{ marginVertical: 5 }} />
                    </ScrollView>
                </NativeViewGestureHandler>
            </View>
        </PanGestureHandler>
    );
};

export default ProductDetailScreen;