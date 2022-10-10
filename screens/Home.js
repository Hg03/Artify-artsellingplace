import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Image, StyleSheet,Text,TouchableOpacity, ScrollView } from "react-native";
import circle from '../assets/images/CirVec1.png';
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData, SHADOWS, SIZES } from "../constants";
import SearchComponent from "../components/SearchComponent";
import shoes from '../assets/images/shoes.jpg';
import pen from '../assets/images/pen.jpg';
import heart from '../assets/icons/heart.png';
import { SubInfo } from "../components";
import { Ionicons } from '@expo/vector-icons';
import shirt from '../assets/images/shirt1.jpg';
import watch from '../assets/images/watch1.jpg';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style = {styles.container}>
      <Image source={circle} style = {{ width:200, height:150 }} />
      <View style = {{ alignItems: 'center', height:170, width:"100%",position:'absolute',flexDirection:'row'}}>
        <Text style = {{fontSize:30,marginLeft:'4%' }}>Artify</Text>
        <SearchComponent />
      </View>

      {/* Card starts from here */}

      <View style = {{height:350,backgroundColor: COLORS.white,borderRadius: SIZES.font,marginBottom: SIZES.extraLarge,margin : SIZES.base,...SHADOWS.dark}}>
        <View style = {{ width: "100%", height : 250 }}>
          <Image source={shoes} resizeMode="cover" style={{ width:"100%", height:"100%", borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font,}}/>
          <TouchableOpacity style={{width: 5,height: 35,backgroundColor: COLORS.white,position: "absolute",borderRadius: 24,marginLeft:'85%',marginTop:'2%'}}>
            <Image source={heart} resizeMode="contain" style={{ width: 24, height: 24,marginTop:"17%",marginLeft:'23%' }}/>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <View>
              <Text style = {{marginLeft:'15%',fontWeight:'bold',fontSize:25}}>Shoes</Text>
              <Text style = {{marginLeft:'15%',marginTop:'2%',fontSize:15}}>Karan Sahu</Text>
              <View style = {{marginLeft:'15%',flexDirection:'row',marginTop:'12%'}}>
                <Ionicons name="ios-pricetags-outline" size={24} color="#363488" />
                <Text style = {{marginLeft:'9%',color:'#363488'}}>20$</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style = {{marginTop:'2%',marginLeft:'60%'}}>
                <Ionicons name="ios-share-social-sharp" size={30} color="#363488" />
              </TouchableOpacity>
              <TouchableOpacity style = {{width:'30%',height:40,backgroundColor:'black',marginLeft:'50%',borderRadius:20,marginTop:'6%'}}>
                <Text style = {{fontSize:20,color:'white',textAlign:'center',marginTop:'5%'}}>View</Text>
              </TouchableOpacity>
            </View>
              
          </View>
            
            
          
          
        
          
          
        </View>
        
      </View>

      {/* -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <View style = {{height:350,backgroundColor: COLORS.white,borderRadius: SIZES.font,marginBottom: SIZES.extraLarge,margin : SIZES.base,...SHADOWS.dark}}>
        <View style = {{ width: "100%", height : 250 }}>
          <Image source={watch} resizeMode="cover" style={{ width:"100%", height:"100%", borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font,}}/>
          <TouchableOpacity style={{width: 5,height: 35,backgroundColor: COLORS.white,position: "absolute",borderRadius: 24,marginLeft:'85%',marginTop:'2%'}}>
            <Image source={heart} resizeMode="contain" style={{ width: 24, height: 24,marginTop:"17%",marginLeft:'23%' }}/>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <View>
              <Text style = {{marginLeft:'15%',fontWeight:'bold',fontSize:25}}>Pen</Text>
              <Text style = {{marginLeft:'15%',marginTop:'2%',fontSize:15}}>Aman Pandagre</Text>
              <View style = {{marginLeft:'15%',flexDirection:'row',marginTop:'12%'}}>
                <Ionicons name="ios-pricetags-outline" size={24} color="#363488" />
                <Text style = {{marginLeft:'9%',color:'#363488'}}>20$</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style = {{marginTop:'2%',marginLeft:'60%'}}>
                <Ionicons name="ios-share-social-sharp" size={30} color="#363488" />
              </TouchableOpacity>
              <TouchableOpacity style = {{width:'30%',height:40,backgroundColor:'black',marginLeft:'50%',borderRadius:20,marginTop:'6%'}}>
                <Text style = {{fontSize:20,color:'white',textAlign:'center',marginTop:'5%'}}>View</Text>
              </TouchableOpacity>
            </View>
              
          </View>
            
            
          
          
        
          
          
        </View>
        
      </View>

      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <View style = {{height:350,backgroundColor: COLORS.white,borderRadius: SIZES.font,marginBottom: SIZES.extraLarge,margin : SIZES.base,...SHADOWS.dark}}>
        <View style = {{ width: "100%", height : 250 }}>
          <Image source={shirt} resizeMode="cover" style={{ width:"100%", height:"100%", borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font,}}/>
          <TouchableOpacity style={{width: 5,height: 35,backgroundColor: COLORS.white,position: "absolute",borderRadius: 24,marginLeft:'85%',marginTop:'2%'}}>
            <Image source={heart} resizeMode="contain" style={{ width: 24, height: 24,marginTop:"17%",marginLeft:'23%' }}/>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <View>
              <Text style = {{marginLeft:'15%',fontWeight:'bold',fontSize:25}}>Shirt</Text>
              <Text style = {{marginLeft:'15%',marginTop:'2%',fontSize:15}}>Muskan Mishra</Text>
              <View style = {{marginLeft:'15%',flexDirection:'row',marginTop:'12%'}}>
                <Ionicons name="ios-pricetags-outline" size={24} color="#363488" />
                <Text style = {{marginLeft:'9%',color:'#363488'}}>1000$</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style = {{marginTop:'2%',marginLeft:'60%'}}>
                <Ionicons name="ios-share-social-sharp" size={30} color="#363488" />
              </TouchableOpacity>
              <TouchableOpacity style = {{width:'30%',height:40,backgroundColor:'black',marginLeft:'50%',borderRadius:20,marginTop:'6%'}}>
                <Text style = {{fontSize:20,color:'white',textAlign:'center',marginTop:'5%'}}>View</Text>
              </TouchableOpacity>
            </View>
              
          </View>
            
            
          
          
        
          
          
        </View>
        
      </View>

      {/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <View style = {{height:350,backgroundColor: COLORS.white,borderRadius: SIZES.font,marginBottom: SIZES.extraLarge,margin : SIZES.base,...SHADOWS.dark}}>
        <View style = {{ width: "100%", height : 250 }}>
          <Image source={pen} resizeMode="cover" style={{ width:"100%", height:"100%", borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font,}}/>
          <TouchableOpacity style={{width: 5,height: 35,backgroundColor: COLORS.white,position: "absolute",borderRadius: 24,marginLeft:'85%',marginTop:'2%'}}>
            <Image source={heart} resizeMode="contain" style={{ width: 24, height: 24,marginTop:"17%",marginLeft:'23%' }}/>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <View>
              <Text style = {{marginLeft:'15%',fontWeight:'bold',fontSize:25}}>Pen</Text>
              <Text style = {{marginLeft:'15%',marginTop:'2%',fontSize:15}}>Aman Pandagre</Text>
              <View style = {{marginLeft:'15%',flexDirection:'row',marginTop:'12%'}}>
                <Ionicons name="ios-pricetags-outline" size={24} color="#363488" />
                <Text style = {{marginLeft:'9%',color:'#363488'}}>20$</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style = {{marginTop:'2%',marginLeft:'60%'}}>
                <Ionicons name="ios-share-social-sharp" size={30} color="#363488" />
              </TouchableOpacity>
              <TouchableOpacity style = {{width:'30%',height:40,backgroundColor:'black',marginLeft:'50%',borderRadius:20,marginTop:'6%'}}>
                <Text style = {{fontSize:20,color:'white',textAlign:'center',marginTop:'5%'}}>View</Text>
              </TouchableOpacity>
            </View>
              
          </View>
            
            
          
          
        
          
          
        </View>
        
      </View>
      </View>
      
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container : {
    height : "100%",
    backgroundColor : 'white',

  },
});
