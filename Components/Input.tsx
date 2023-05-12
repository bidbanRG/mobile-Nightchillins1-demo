import React,{useState,useEffect,useRef} from 'react';

import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, ScrollView, Image,Platform} from 'react-native';
import styled from 'styled-components';
import axios from 'axios'
import { Camera, CameraType } from 'expo-camera'
import { Audio } from 'expo-av'
import { uploadPhoto, uploadVideo } from '../apis/UploadsApi';
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
const Input:React.FC = () => {
 
 const [allow,setAllow] = useState<boolean>(false);
     const cam = useRef<Camera | null>();
     const [galleryItems, setGalleryItems] = useState<MediaLibrary.Asset[]>([]);
 
    const [photo,setPhoto] = useState<ImagePicker.ImagePickerResult>();
    const [Isfront,setIsfront] = useState(false);
    const [url,setUrl] = useState<string>();
    const [isCameraReady, setIsCameraReady] = useState(false)

    const Allow = async ():Promise<void> => {
      const Status1 = await Camera.requestCameraPermissionsAsync();
      const Status2 = await Audio.requestPermissionsAsync();
      const Status3 = await ImagePicker.requestMediaLibraryPermissionsAsync();
       setAllow(Status1.status === 'granted' && Status2.status === 'granted' && Status3.status == 'granted');
       
       if(Status3.status === 'granted'){
       	 const userGalleryMedia = await MediaLibrary.getAssetsAsync({ sortBy: ['creationTime'],mediaType:['photo'] })
          setGalleryItems(userGalleryMedia.assets);  
       }
           
               
            
    }         
   const pickFromGallery = async () => {
        // let result = await ImagePicker.launchImageLibraryAsync();
    
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [16, 9],
            quality: 1
        })
          if(result.cancelled) return;
        
        console.log(result);
        setPhoto(result);
         
       
    }
     
   const send = async () => {
    const URL = 'http://4964-146-196-47-229.ngrok.io/users';
    
   }
	return (
      <InputView>
       <Button onPress = {Allow} title = 'allow' />
               { allow &&  <Camera ref = {(camera) => {
                      cam.current = camera;
                   }} 
                   type = { Isfront ? CameraType.back: CameraType.front } 
                   style = {{height:400,width:'100%'}}  
                   
                   />}

                    {allow && <Button onPress = {() => setIsfront(!Isfront)} title = 'camface' />  } 
                 {allow && <TouchableOpacity onPress = {() => pickFromGallery()}> 
                 	   <Text> Choose Image </Text>
                     </TouchableOpacity>
                 }

    {url && <Image style = {{height:400,width:'100%',marginBottom:30}} source = {{ uri:url }}/>  }
                
                 {photo && <Button title = 'send' onPress = {send} />}

                     
                
      </InputView>
    )
}

const InputView = styled.ScrollView`

  margin-left:auto;
  margin-right:auto;
  margin-top:20px;
  width:90%;
  height:800px;
  background-color:teal;

`

export default Input;