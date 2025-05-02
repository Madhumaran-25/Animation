import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const GestureAnimation = () => {

    const color = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: color.value === 0 ? 'blue' : 'red'
        }
    });

    const tap = Gesture.Tap()
        .onBegin(() => {
            color.value = color.value === 0 ? 1 : 0;
        })
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <GestureDetector gesture={tap}>
                <Animated.View style={[{ height: 100, width: 100, }, animatedStyle]}>

                </Animated.View>
            </GestureDetector>
        </View>
    )
}

export default GestureAnimation;

const styles = StyleSheet.create({})