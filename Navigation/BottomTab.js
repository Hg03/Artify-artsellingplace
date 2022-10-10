import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import Registration from "../components/Registration";
// import ChangePassword from "../components/ChangePassword";
// import ForgotPassword from "../components/ForgotPassword";
import WishList from "../screens/Wishlist";
import UserProfile from "../screens/UserProfile";
import Likes from "../screens/Like";
import Post from "../screens/Post";
import Settings from "../screens/Settings";
import Faqs from "../screens/Faqs";
import Details from "../screens/Details";
import Checkout from "../screens/Checkout";
import SearchPage from "../screens/SearchPage";
import SellerProfile from "../screens/SellerProfile";

const AddPost=()=>{
    return(
        <TouchableOpacity>
<View style={{backgroundColor:"#363488",width:61,height:57,borderRadius:20,alignItems:"center"}}>
<Ionicons name="add-sharp" size={50} color="white" />
</View>
        </TouchableOpacity>
        
    )
}
const BottomTab=()=>{
const Tab=createBottomTabNavigator();
    return(
<Tab.Navigator
screenOptions={{
    headerShown : false,
    tabBarShowLabel:false,
    tabBarStyle: { backgroundColor:"#F3F8FE",
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    borderTopWidth:0,
    height:"7%"
     },
}}
>
    <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({focused})=>(
            <View>
             <FontAwesome name="home" size={30} color={focused?"#363488":"black"} />
            </View>
        )
    }} />

    <Tab.Screen name="WishList" component={WishList} 
        options={{
        tabBarIcon:({focused})=>(
            <View>
           
             <FontAwesome5 name="shopping-cart" size={26} color={focused?"#363488":"black"} />
            </View>
        )
    }}
    />

<Tab.Screen name="Post" component={Post} 
        options={{
        tabBarIcon:({focused})=>(
            <View style={{marginBottom:"100%",height:"70%"}}>
            <AddPost/>
             {/* <FontAwesome5 name="shopping-cart" size={26} color={focused?"blue":"black"} /> */}
            </View>
        )
    }}
    />
    
   
    

<Tab.Screen name="SellerProfile" component={SellerProfile}
    options={{
        tabBarIcon:({focused})=>(
            <View>
           <Ionicons name="settings" size={30} color={focused?"#363488":"black"}  />
            
            </View>
        )
    }}
     />   

<Tab.Screen name="UserProfile" component={UserProfile}
    options={{
        tabBarIcon:({focused})=>(
            <View>
             <Feather name="user" size={30} color={focused?"#363488":"black"} />
            
            </View>
        )
    }}
     />
</Tab.Navigator>
    )

}

export default BottomTab;
