import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

const ScaleAnimation = () => {

    const scale = useSharedValue(1);

    const startAnimate = () => {
        scale.value = withTiming(2, { duration: 2000 })

        setTimeout(() => {
            scale.value = withTiming(1, { duration: 2000 })
        }, 2000);
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={startAnimate}>
                <Animated.View style={{ height: 200, width: 200, borderRadius: 100, backgroundColor: 'blue', transform: [{ scale: scale }] }}>

                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

export default ScaleAnimation