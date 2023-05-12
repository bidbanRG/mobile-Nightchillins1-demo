import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View  } from 'react-native';
import Home from './Home';
import { TabParamList } from './types';
import { AntDesign,Ionicons,FontAwesome } from '@expo/vector-icons'; 
import { TabNavProps } from './types';
import { useEffect } from 'react';
import { useState } from 'react';
const Tab = createBottomTabNavigator<TabParamList>();
export default function HomeScreen(){

    return(

        <Tab.Navigator 
            
              screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
              return <ActiveIcon name = {route.name} focused = {focused}/>
          },
          tabBarShowLabel:false,
          header:() => null,
         tabBarStyle:{
           backgroundColor:'lightgrey',
          
         }

        })}>
       
       
          <Tab.Screen name="Home" component={Home} />   
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Settings" component={Settings} />

      </Tab.Navigator>
   

    
    )

}


const Search:React.FC<TabNavProps<'Search'>> = ({navigation,route}) => {
  
const [focused,setFocused] = useState(false);
  useEffect(() => {
      setFocused(true);
    },[])
   console.log(focused);
    return(
       <Text> Search </Text>
    )
}
const Settings = ({navigation,route}:TabNavProps<'Settings'>) => {
    return(
       <Text> Settings </Text>
    )
}


const ActiveIcon:React.FC<{name:string;focused:boolean}> = ({name,focused}) => {
  if (name === 'Home') {
    let val = focused ? 40 : 30;
    return  <View style = {{
        height:val,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:val,
        borderRadius:50,
        borderWidth:2,
        borderColor: `${focused ? 'red' : 'black'}`
    }}><FontAwesome name = 'home' size={focused ? 24 : 17} color = {focused ? 'red' : 'black'}/></View>
  } else if (name === 'Settings') {
     let val = focused ? 40 : 30;
    return (
      <View style = {{
       height:val,
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       width:val,
       borderRadius:50,
       borderWidth:2,
       borderColor: `${focused ? 'red' : 'black'}`
   }}>
      <Text><Ionicons name = 'settings' size={focused ? 24 : 17} color = {focused ? 'red' : 'black'}/></Text>
    </View>)
  }else{
    let val = focused ? 40 : 30;
     return (
     <View style = {{
      height:val,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:val,
      borderRadius:50,
      borderWidth:2,
      borderColor: `${focused ? 'red' : 'black'}`
  }}>
     <Text> <AntDesign name = 'search1' size={focused ? 24 : 17}  color = {focused ? 'red' : 'black'}/> </Text>
   </View>)
  }
}