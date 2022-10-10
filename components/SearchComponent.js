import * as React from 'react';
import { Button, Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="What do you wanna buy ?"
      onChangeText={onChangeSearch}
      value={searchQuery}
      iconColor="#363488"
      style = {{
        width:'90%',
        marginLeft:"1%",
        borderRadius:15,
        opacity:0.4,
        marginTop:"30%"
        
      }}
    />
  );
};

export default SearchComponent;
