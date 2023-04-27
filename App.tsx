import React from 'react';
import { Text,StyleSheet,View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import MyStack from './navigation';

const App = () => {
  return (
    
      <NavigationContainer >
        <MyStack />
      </NavigationContainer>
     
    
  )
}
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:16
  }
})

export default App;