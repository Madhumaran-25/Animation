import { View, Text } from 'react-native'
import React from 'react'
import AnimationFn from './src/screens/AnimationFn'
import ScaleAnimation from './src/screens/ScaleAnimation'
import RotateAnimation from './src/screens/RotateAnimation'
import TryIt from './src/screens/TryIt';
import GestureAnimation from './src/screens/Gesture'
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler'
import PinchGesture from './src/screens/Pinch'
import CombinedGestures from './src/screens/CombimedGestures'


const App = () => {
  return (

    <GestureHandlerRootView>
      <CombinedGestures/>
    </GestureHandlerRootView>
    )
}

export default App