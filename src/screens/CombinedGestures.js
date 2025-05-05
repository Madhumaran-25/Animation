import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const CombinedGestures = () => {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const isDragging = useSharedValue(false);

    const animatedStyle = useAnimatedStyle(() => {
        return {

            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value }
            ],
            backgroundColor: isDragging.value ? "red" : "blue"
        }
    });

    const longPressGesture = Gesture.LongPress()
        .minDuration(300)
        .onStart(() => {
            isDragging.value = true;
        });

    const panGesture = Gesture.Pan()
        .onUpdate((event) => {

            if (isDragging.value) {

                translateX.value = event.translationX;
                translateY.value = event.translationY;
            }
        })
        .onEnd(() => {
            isDragging.value = false,
                translateX.value = 0;
            translateY.value = 0;
        })

    const multipleGestured = Gesture.Simultaneous(panGesture, longPressGesture)
    return (
        <View style={styles.container}>
            <GestureDetector gesture={multipleGestured}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </GestureDetector>
        </View>
    )
}

export default CombinedGestures

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
        borderRadius: 12,
    },
});