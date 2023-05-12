import React from 'react'
import {AuthNavProps} from './types';
import {View , Text, Button} from 'react-native';

const Login:React.FC<AuthNavProps<'Login'>> = ({navigation,route}) => {
 
  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text> Login </Text> 
      <Button onPress={() => navigation.navigate('HomeScreen') } title = 'Home'></Button>
    </View>
  )
}

export default Login