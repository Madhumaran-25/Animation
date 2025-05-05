import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const TryIt = () => {

  const position = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {

    const opacity = interpolate(position.value, [0, 500], [1, 0.5])
    const bgColor = interpolateColor(position.value, [0, 500], ['blue', 'red'])

    return {
      transform: [{ translateY: position.value }],
      opacity: opacity,
      backgroundColor: bgColor
    }
  });

  const handleClick = () => {
    position.value = withTiming(position.value === 0 ? 500 : 0, { duration: 5000 })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Animated.View style={[styles.box, animatedStyle]}>
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

export default TryIt;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  }
})