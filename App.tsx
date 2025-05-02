import { View, Text } from 'react-native'
import React from 'react'
import AnimationFn from './src/screens/AnimationFn'
import ScaleAnimation from './src/screens/ScaleAnimation'
import RotateAnimation from './src/screens/RotateAnimation'
import TryIt from './src/screens/TryIt';
import GestureAnimation from './src/screens/Gesture'
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler'


const App = () => {
  return (

    <GestureHandlerRootView>
      <GestureAnimation/>
    </GestureHandlerRootView>
    )
}

export default App