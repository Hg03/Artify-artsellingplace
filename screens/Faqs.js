import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Accordion from '../components/Accordion';
import circle from '../assets/images/CirVec1.png';


const Faqs = () => {
  const data = [
    {
      id : 0,
      title : 'How can i order the product ?',
      body : 'Simply click on the view to checkout for the post and make payment as well as enough information about seller so that you can contact him.'
    },
    {
      id : 1,
      title : 'What if seller did not sent the product after buying ?',
      body : 'Simply report the issue, we will react to you very soon and take some immediate action.'
    },
    {
      id : 2,
      title : 'How can i get the information details about seller ?',
      body : 'Go to that particular post which you want to buy and there you can get your sellers details.'
    },
    {
      id : 3,
      title : 'Can I get some discounts on products ?',
      body : 'You can contact the seller for some bargaining options.'
    },
    {
      id : 4,
      title : 'Is there any wishlist feature ?',
      body : 'Yes there is a wishlist / add to cart feature.'
    }
  ];
  return (
    <View style = {styles.container}>
      <Image source={circle} style = {{ width:200, height:150 }} />        
      <View style = {{ alignItems: 'center', height:100, width:"100%", position:'absolute'}}>
              
        <Text style = {{ fontWeight:"bold" , fontSize : 30, lineHeight : 48, color: "#363488", top:70}}>
          FAQs
        </Text>
      </View>


      <FlatList
        data = {data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Accordion title={item.title} bodyText={item.body} />
        )}
      />
    </View>
  );
}

export default Faqs;

const styles = StyleSheet.create({
  container : {
    height : '100%',
    backgroundColor : 'white',
  },
});