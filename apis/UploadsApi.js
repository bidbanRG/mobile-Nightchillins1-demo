 import {Platform} from 'react-native';
 

export const uploadPhoto = (file) => {
    
    
   const URL = "https://api.cloudinary.com/v1_1/dnbpwbzkv/image/upload";   
   const Data = new FormData();
    const File = {
      uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
      type: file.type.includes('image') ? 'image/jpg' : 'video/mp4',
      name:new Date() + '_profile',
   }
   
   Data.append('file',File);
   Data.append('upload_preset','jmixsgj4');


  const promise = new Promise((resolve,reject) => {

    const xhr = new XMLHttpRequest();

      

      xhr.addEventListener('load', ()=>{
          const response  = JSON.parse(xhr.response);
          
          if(xhr.status >= 400) reject(xhr.resoonse);
           
           resolve(response);
      
      })
      
      
        xhr.open('POST',URL,true);
        xhr.setRequestHeader('Content-Type','multipart/form-data');
        xhr.send(Data);
     
  })

 return promise;

}

export const uploadVideo = (file) => {
    
    
   const URL = "https://api.cloudinary.com/v1_1/dnbpwbzkv/video/upload";   
   const Data = new FormData();
    const File = {
      uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
      type: file.type.includes('image') ? 'image/jpg' : 'video/mp4',
      name:new Date() + '_profile',
   }
   
   Data.append('file',File);
   Data.append('upload_preset','jmixsgj4');


  const promise = new Promise((resolve,reject) => {

    const xhr = new XMLHttpRequest();

      

      xhr.addEventListener('load', ()=>{
          const response  = JSON.parse(xhr.response);
          
          if(xhr.status >= 400) reject(xhr.resoonse);
           
           resolve(response);
      
      })
      
      
        xhr.open('POST',URL,true);
        xhr.setRequestHeader('Content-Type','multipart/form-data');
        xhr.send(Data);
     
  })

 return promise;

}

