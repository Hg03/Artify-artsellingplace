import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, {useState} from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons';

const SelectImage = () => {

  return (
    <View>
    <View>
      <TouchableOpacity style = {{flexDirection:'row',marginLeft:'22%',width:'100%',marginTop:'2%'}}>
        <FontAwesome name="folder-open" size={50} color="#363488" />
        <View style = {{backgroundColor:'#363488',width:'40%',height:50,borderRadius:20,marginLeft:'4%'}}>
          <Text style = {{color:'white',marginTop:'8%',marginLeft:'6%'}}>Upload from Gallery</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style = {{flexDirection:'row',marginLeft:'22%',width:'100%',marginTop:'3%'}}>
        <Entypo name="camera" size={50} color="#363488" />
        <View style = {{backgroundColor:'#363488',width:'40%',height:45,borderRadius:20,marginLeft:'5%'}}>
          <Text style = {{color:'white',marginTop:'8%',marginLeft:'30%'}}>Camera</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
  )

};

export default SelectImage;
