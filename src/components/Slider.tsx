import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewToken,
    useWindowDimensions,
} from 'react-native';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ImageSlider, ImageSliderType } from '@/data/SliderData';
import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';


const Slider = () => {
    // Call the useIsLargeScreen hook here
    const isLargeScreen = useIsLargeScreen();
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isManualScrolling, setIsManualScrolling] = useState(false);
    const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);
    const resumeAutoScrollTimer = useRef<NodeJS.Timeout | null>(null);
    const { width } = useWindowDimensions();

    const scrollToIndex = useCallback((index: number) => {
        flatListRef.current?.scrollToIndex({ index, animated: true });
    }, []);

    const scrollToNext = useCallback(() => {
        const nextIndex =
            currentIndex === ImageSlider.length - 1 ? 0 : currentIndex + 1;
        scrollToIndex(nextIndex);
    }, [currentIndex, scrollToIndex]);

    const scrollToPrev = useCallback(() => {
        const prevIndex =
            currentIndex === 0 ? ImageSlider.length - 1 : currentIndex - 1;
        scrollToIndex(prevIndex);
    }, [currentIndex, scrollToIndex]);

    const startAutoScroll = () => {
        stopAutoScroll(); // Clear any existing first
        autoScrollTimer.current = setInterval(scrollToNext, 3000);
    };

    const stopAutoScroll = () => {
        if (autoScrollTimer.current) {
            clearInterval(autoScrollTimer.current);
            autoScrollTimer.current = null;
        }
    };

    const pauseAndResumeAutoScroll = () => {
        stopAutoScroll();
        if (resumeAutoScrollTimer.current) {
            clearTimeout(resumeAutoScrollTimer.current);
        }
        resumeAutoScrollTimer.current = setTimeout(() => {
            setIsManualScrolling(false);
            startAutoScroll();
        }, 4000); // 4 seconds pause after user stops scrolling
    };

    const handleScrollToIndexFailed = useCallback((info: { index: number }) => {
        setTimeout(() => {
            flatListRef.current?.scrollToIndex({
                index: info.index,
                animated: true,
            });
        }, 500); // Consider adjusting this delay based on experience/testing
    }, []);

    useEffect(() => {
        startAutoScroll();
        return () => {
            stopAutoScroll();
            if (resumeAutoScrollTimer.current) {
                clearTimeout(resumeAutoScrollTimer.current);
            }
        };
    }, [currentIndex]);

    const onScrollBegin = () => {
        setIsManualScrolling(true);
        pauseAndResumeAutoScroll();
    };

    const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
    const viewabilityConfigCallbackPairs = useRef([
        {
            onViewableItemsChanged: ({
                viewableItems,
            }: {
                viewableItems: ViewToken[];
            }) => {
                const visibleItem = viewableItems[0];
                if (visibleItem && visibleItem.index !== null) {
                    setCurrentIndex(visibleItem.index);
                }
            },
            viewabilityConfig,
        },
    ]);

    const data = ImageSlider.length > 0 ? ImageSlider : []; // Graceful fallback to empty data if ImageSlider is empty

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={[styles.image, { height: isLargeScreen ? 500 : 300 }]} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(_, index) => index.toString()}
                onScrollBeginDrag={onScrollBegin}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
                onScrollToIndexFailed={handleScrollToIndexFailed} // Handled debounced retry
            />

            {/* Arrows */}
            <TouchableOpacity style={styles.leftArrow} onPress={scrollToPrev}>
                <Text style={styles.arrowText}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightArrow} onPress={scrollToNext}>
                <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>

            {/* Indicator Dots */}
            <View style={styles.dotsContainer}>
                {ImageSlider.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default Slider;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        position: 'relative',
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    image: {
        width: Dimensions.get('window').width - 20,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#333',
        textAlign: 'center',
    },
    leftArrow: {
        position: 'absolute',
        left: 10,
        top: '50%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 20,
        padding: 10,
        zIndex: 10,
        transform: [{ translateY: -50 }],
    },
    rightArrow: {
        position: 'absolute',
        right: 10,
        top: '50%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 20,
        padding: 10,
        zIndex: 10,
        transform: [{ translateY: -50 }],
    },
    arrowText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#333',
        width: 10,
        height: 10,
    },
});
