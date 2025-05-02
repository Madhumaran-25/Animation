import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

const RotateAnimation = () => {

    const rotate = useSharedValue(0);

    const rotateStyle = useAnimatedStyle(() => { 
        return{

            transform: [
                 { rotate: `${rotate.value}deg` }
             ]
            }
    })

    const startRotate = () => {
        rotate.value = 0;
        rotate.value = withRepeat
            (
            withTiming(360, 
            { duration: 3000, easing: Easing.linear }),
             -1, 
             false
            )};


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={startRotate}>

                <Animated.View style={[{height: 100, width: 100, backgroundColor: 'blue'}, rotateStyle ]}>

                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

export default RotateAnimation