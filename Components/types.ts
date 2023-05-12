import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export  type AuthParamsList = {
    "HomeScreen":undefined
    "Login":undefined
 }
 
 export type TabParamList = {
     "Home":undefined;
     "Search":undefined;
     "Settings":undefined;
 }

 export type AuthNavProps<T extends keyof AuthParamsList > = {

    navigation:NativeStackNavigationProp<AuthParamsList,T>;
    route:RouteProp<AuthParamsList,T>;
        
 }

 export type TabNavProps<T extends keyof TabParamList> = {
    navigation:BottomTabScreenProps<TabParamList,T>;
    route:RouteProp<TabParamList,T>;
 }