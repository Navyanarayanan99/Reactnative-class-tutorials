import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {style} from './styles';
const FlatListComponent = () => {
  const DATA = [
    {
      name: 'ABC',
      email: 'abc@gmail.com',
    },
    {
      name: 'bbb',
      email: 'abc@gmail.com',
    },
    {
      name: 'CCC',
      email: 'abc@gmail.com',
    },
    {
      name: 'AAA',
      email: 'abc@gmail.com',
    },
    {
      name: 'ABB',
      email: 'abc@gmail.com',
    },
    {
      name: 'ACC',
      email: 'abc@gmail.com',
    },
  ];

  const Header = () => {
    return (
      <View>
        <Text>Data List</Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View>
        <Text>End list</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={DATA}
        //horizontal
        numColumns={4}
        ListHeaderComponent={
          () => <Header />
          //(
          //   <View>
          //     <Text>Data List</Text>
          //   </View>
          //)
        }

        ListFooterComponent={ () => <Footer />}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={style.textStyle}>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatListComponent;
