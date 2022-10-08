import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import person01 from "../assets/images/person01.png";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import SettingsHeader from "../components/SettingsHeader";
import { COLORS, FONTS, NFTData, SIZES } from "../constants";
import { Ionicons, Foundation, Entypo, MaterialIcons, Octicons, FontAwesome5, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { Avatar } from "react-native-paper";
import SwitchComponent from "../components/SwitchComponent";
import Profile from "../components/Profile";
import circle from "../assets/images/CirVec1.png";
import Faqs from "./Faqs";

const Settings = () => {
  

  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      
          



          
        

            <Image source={circle} style = {{ width:200, height:150 }} />        
            <View style = {{ alignItems: 'center', height:100, width:"100%", position:'absolute'}}>
              
              <Text style = {{ fontWeight:"bold" , fontSize : 30, lineHeight : 48, color: "#363488", top:70}}>
                Settings
              </Text>
            </View>
            
              <Profile />
            

            <View style = {{ position : 'relative' , marginTop:34 }}>
          
            <View style = {{
              // backgroundColor:'red',
              height:'auto',
              justifyContent:'center',
              flexDirection:'row',
              
              
              
            }}>
            <Ionicons name="moon" size={35} color="#363488" style = {{ marginTop : "4%"}}/>
            <Text  style = {{
              fontFamily:FONTS.bold,
              marginTop : "5%",
              fontSize:18,
              marginRight: "40%",
              marginLeft : "5%"
              
            }}>
              Dark Mode
            </Text>
            
            {/* <Entypo name="switch" size={40} color="#363488" style = {{ marginTop : 10, marginLeft:160}}/> */}
            <SwitchComponent />
            
           </View>
           
           
           <TouchableOpacity>
            <View style = {{
              backgroundColor:'red',
              height:'auto',
              width:"100%",
              justifyContent:'center',
              flexDirection:'row',
              marginTop :"5%"
              
              
            }}>
            <MaterialIcons name="lock-open" size={35} color="#363488" style = {{ marginTop : "4%"}}/>
            <Text  style = {{
              fontFamily:FONTS.bold,
              marginTop : "5%",
              marginTop : 19,
              fontSize:18,
              marginRight : "26%",
              marginLeft : "5%"
            }}>
              Change Password
            </Text>
            <AntDesign name="right" size={35} color="#363488" style = {{ marginTop : "3%"}}/>

            
            </View>
           </TouchableOpacity> 
           
            <TouchableOpacity>
              <View style = {{
              // backgroundColor:'red',
              height:'auto',
              justifyContent:'center',
              flexDirection:'row',
              marginTop : "5%"
              
              
            }}>
            <Octicons name="question" size={35} color="#363488" style = {{ marginTop : "4%"}}
            />
            <Text  style = {{
              fontFamily:FONTS.bold,
              marginTop : "5%",
              fontSize:18,
              marginRight : "55%",
              marginLeft : "6%"
            }}>
              FAQs
            </Text>
            
            <AntDesign name="right" size={35} color="#363488" style = {{ marginLeft : "1%" }}/>
            
            
            </View>
           </TouchableOpacity>

           <TouchableOpacity>

            <View style = {{
              // backgroundColor:'red',
              height:'auto',
              justifyContent:'center',
              flexDirection:'row',
              marginTop : "5%"
              
            }}>
            <Foundation name="telephone" size={35} color="#363488" style = {{ marginTop : "4%"}}/>
            <Text  style = {{
              fontFamily:FONTS.bold,
              marginTop : "5%",
              fontSize : 18,
              marginRight : "41%",
              marginLeft : "6%"
            }}>
              Contact Us
            </Text>
            <AntDesign name="right" size={35} color="#363488" style = {{ }}/>

            
            </View>

           </TouchableOpacity>

           <TouchableOpacity>

            <View style = {{
              // backgroundColor:'red',
              height:'auto',
              justifyContent:'center',
              flexDirection:'row',
              marginTop:"5%",
              marginRight : "4%"
            }}>
            <FontAwesome5 name="user-edit" size={35} color="#363488" style = {{ marginTop : "4%", marginRight : "4%", marginLeft : "1%" }}/>
            <Text  style = {{
              fontFamily:FONTS.bold,
              marginTop : "4%",
              fontSize : 18,
              marginRight : "40%",
              marginLeft : "1%"
            }}>
              Edit Profile
            </Text>
            <AntDesign name="right" size={35} color="#363488" style = {{ marginLeft : "2%"}}/>

            
            </View>
           </TouchableOpacity>

           <TouchableOpacity>

            <View
            style = {{
              height:'auto',
              justifyContent:'center',
              flexDirection:'row',
              marginTop : "5%"
            }}
           >
           <SimpleLineIcons name="logout" size={35} color="red" style = {{ marginTop : "4%", marginRight : "8%"}}/>
            <Text  style = {{
              fontFamily:FONTS.bold,
              marginTop : "5%",
              color : 'red',
              fontSize : 18,
              marginRight : "62%"
            }}>
              Logout
            </Text>
            </View>
           </TouchableOpacity>
           </View>

           
           
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        

      
            
          
      
      
    </SafeAreaView>
    
  );
}

export default Settings;

