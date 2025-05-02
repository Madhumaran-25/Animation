import { View, Text, TouchableOpacity, } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimationFn = () => {

  const Opacity = useSharedValue(1);

  useEffect(() => {
    console.log('Triggering animation...');
    Opacity.value = withTiming(0, { duration: 10000, easing: Easing.linear })
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{ height: 200, width: 200, borderRadius: 100, backgroundColor: 'blue', opacity: Opacity }}>
      </Animated.View>
    </View>
  )
};

export default AnimationFn