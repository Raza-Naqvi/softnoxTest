import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import ProductScreen from './src/Screens/ProductScreen';
import ProductDetailScreen from './src/Screens/ProductDetailScreen';
import { Screens } from './src/Constants/Screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'vertical',
                animationEnabled: true,
                headerShown: false,
              }}
              initialRouteName={Screens.ProductScreen}
            >
              <Stack.Screen name={Screens.ProductScreen} component={ProductScreen} />
              <Stack.Screen name={Screens.ProductDetailScreen} component={ProductDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;