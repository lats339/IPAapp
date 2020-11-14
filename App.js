import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, Alert, ImagePickerIOS } from 'react-native';
import logo from './assets/icon.png';
import * as imagePicker from 'expo-image-picker';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissonResult = await imagePicker.requestCameraRollPermissionsAsync();
  
    if (permissonResult.granted === false){
      alert('permission to access camera roll is required!');
      return;
    }
  
    let pickerResult = await imagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true){
      return;
    }
   
    setSelectedImage({localUri: pickerResult.uri});

  };

  if (selectedImage !== null){
return(
  <View style={styles.container}>
    <Image
      sourcer={{ uri: selectedImage.localUri}}
      style={styles.thumbnail}
/>

  </View>
);

}

  return (
    <View style={styles.container}>

    <Image source = {{url: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo}/>
      
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
        </Text>
      
      <TouchableOpacity onPress={openImagePickerAsync}
      style={styles.button}> 
      <Text style={styles.buttontext}>Pick a photo</Text>
      </TouchableOpacity>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 305,
    height: 159,
    marginBottom: 10,
  },

  instructions: {
    color: '#305',
    fontSize: 18,
    marginHorizontal: 15,

  },

  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    marginTop: 10,

  },

  buttontext: {
    fontSize: 20, 
    color: '#fff',

  },

  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',

  },


  
});
