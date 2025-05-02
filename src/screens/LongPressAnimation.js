import React, { useState } from 'react';
import { View, StyleSheet, useAnimatedValue } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const LongPressExample = () => {
  const color = useSharedValue('blue')

  const animatedValue = useAnimatedStyle(() => {
      return {
         backgroundColor: color.value
      }
  })

  const longPressGesture = Gesture.LongPress()
    .onStart(() => {
      color.value = 'orange'
    })
    .onEnd(() => {
      color.value = 'red'
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={longPressGesture}>
        <Animated.View style={[styles.box, animatedValue]} />
      </GestureDetector>
    </View>
  );
};

export default LongPressExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
