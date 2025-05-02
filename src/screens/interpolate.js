import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'

const TryIt = () => {

    const position = useSharedValue(0);



    const animatedStyle = useAnimatedStyle(() => {

        const opacity = interpolate(position.value, [0, -200], [1, 0.5]);
        const bgColor = interpolateColor(position.value, [0, -200], ['blue', 'red']);
        const scale = interpolate(position.value, [0, -200], [2, 0.5])

        return {
            transform: [{ translateY: position.value }, { scale: scale }],
            opacity: opacity,
            backgroundColor: bgColor,
        }
    });

    useEffect(() => {
        position.value = withTiming(-200, { duration: 3000 })
    })


    return (
        <View style={styles.container}>

            <Pressable
                android_ripple={{ color: 'blue' }}
                style={{ padding: 16, backgroundColor: '#ddd', borderRadius: 10 }}>
                <Text>Click Me</Text>
            </Pressable>
            <Animated.View style={[styles.box, animatedStyle]}>

            </Animated.View>
        </View>
    )
}

export default TryIt

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    }
})