import React,{useLayoutEffect,useEffect,useState} from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';import Header from './Header'
;
import Feed from './Feed';
import Input from './Input';
import { AuthNavProps } from './types';

const Home:React.FC<AuthNavProps<'HomeScreen'>> = ({navigation,route}) => {
  const IsLightTheme = false;
  
 
    
    useLayoutEffect(() => {
        navigation.setOptions({
         headerShown:true
      });
    },[]);

    
     
    
  

	return ( 
 
     
     <SafeAreaView style = { {...styles.header, backgroundColor:`${IsLightTheme ? 'whitesmoke' : '#1b1b1b' }`}}>
         <StatusBar style='dark'/>
          <Header/>
			    <Feed/>
          <Input/>
		  </SafeAreaView>
      
  
  
	
	)
}

const Search = () => {
  return(
     <Text> Search </Text>
  )
}
const Settings = () => {
  return(
     <Text> Settings </Text>
  )
}
const styles = StyleSheet.create({
   header: {
    
    height:'100%',
    display:'flex',
    width:'100%',
   

  },
});

export default Home

