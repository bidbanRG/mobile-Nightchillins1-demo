import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login';
import { AntDesign } from '@expo/vector-icons';
import { AuthParamsList } from './Components/types';
import HomeScreen from './Components/HomeScreen';


const Stack = createNativeStackNavigator<AuthParamsList>();

const App:React.FC = () =>  {
  return (
    <NavigationContainer>
  
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        animation:"slide_from_left",
     
       

      }} >
         <Stack.Screen name="HomeScreen" component={HomeScreen}  />
         <Stack.Screen name="Login"component={Login} />
      </Stack.Navigator>
     

    </NavigationContainer>

  );
}
  
const LoginHeader:React.FC = () => {
  return(
    <SafeAreaView>
      <Text> login </Text>
    </SafeAreaView>
  )
}


export default App;