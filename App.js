// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from './src/component/Services';
import Home from './Home';





const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name ="Services" component={Services}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;