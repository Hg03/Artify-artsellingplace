import React from "react";
import { StyleSheet, Text, View ,Image, TouchableOpacity, ImageBackground} from 'react-native';
import { Avatar } from 'react-native-paper';
import AvtarImg from '../assets/images/person01.png'
const Profile=()=>{


    return(
<View style={styles.profileView}>
   <Avatar.Image size={60} source={AvtarImg} style={{marginLeft:20}}  />
   
   <Text style={styles.ProfileName}>Harish Gehlot</Text>
   </View>
    )
}

const styles=StyleSheet.create({

    profileView:{
         marginTop:"auto",
          flexDirection:"row",
          width:"90%",
          position:"relative",
          marginLeft:"auto",
          marginRight:"auto",
          height:"auto",
         
          
      },
      ProfileName:{
      fontWeight:"bold",
      
      fontSize:22,
      textAlign:"center",
      marginTop:"auto",
      marginBottom:"auto",
      marginLeft:40,
      marginRight:"auto",
      color:"#363488",
      },
  
})
export default Profile;