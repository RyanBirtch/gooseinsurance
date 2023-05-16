

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NativeBaseProvider} from 'native-base'
import {Provider} from 'react-redux'
import {
  SafeAreaView,
} from 'react-native';

const Stack = createNativeStackNavigator();




function App(): JSX.Element {

  return (
    <SafeAreaView>
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator>
          
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;
