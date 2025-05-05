import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const GestureAnimation = () => {

    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform : [{ scale: scale.value
            }]
        }
    });

    const longPress = Gesture.LongPress()
        .onStart(() => {
            scale.value = withSpring(0.6)
        }).onEnd(() => { 
             scale.value = withSpring(1);
        })


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <GestureDetector gesture={longPress}>
                <Animated.View style={[{ height: 100, width: 100, backgroundColor:'blue' }, animatedStyle]}>

                </Animated.View>
            </GestureDetector>
        </View>
    )
}

export default GestureAnimation;

const styles = StyleSheet.create({})