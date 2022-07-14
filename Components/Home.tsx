import React,{useLayoutEffect,useEffect} from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native"
import { useAppSelector } from '../States/hooks'
import styled from 'styled-components';
import Header from './Header'
import Feed from './Feed';
const Home:React.FC = () => {
  const IsLightTheme:boolean = useAppSelector((state) => state.theme.value)
  
  const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
         headerShown:false,
      });
    },[]);

	return (
		<SafeAreaView style = { {...styles.header, backgroundColor:`${IsLightTheme ? 'whitesmoke' : '#1b1b1b' }`}}>
          <Header/>
			    <Feed/>
		  </SafeAreaView>
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

