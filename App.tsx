import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Components/Header'
import Home from './Components/Home'
import { store } from './States/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store = {store}>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
     </Provider>
    </NavigationContainer>

  );
}
  
