import { Dimensions, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { ImageSlider, ImageSliderType } from '@/data/SliderData';

// Ensure item.image is of type string

type Props = {
    item: ImageSliderType;
    index: number;
};

const { width } = Dimensions.get('window');

const SliderItem = ({ item, index }: Props) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image as string }} style={{ width: width - 20, height: 300, borderRadius: 10 }} />
            <Text>{item.title}</Text>
        </View>
    );
};

const Slider = () => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={{ width }}
        >
            {ImageSlider.map((item, index) => (
                <SliderItem key={index} item={item} index={index} />
            ))}
        </ScrollView>
    );
};

export default Slider;

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: width,
        padding: 10,
    },
});