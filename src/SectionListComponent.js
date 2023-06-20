import {View, Text, SectionList} from 'react-native';
import React from 'react';

const SectionListComponent = () => {
  const DATA = [
    {
      title: 'Main Dishes',
      data: ['pizza', 'Burger', 'Sandwitch'],
    },
    {
      title: 'Sides',
      data: ['french fries', 'Onion ring', 'fried'],
    },
    {
      title: 'Drinks',
      data: ['water', 'coffee', 'tea'],
    },
    {
      title: 'Desserts',
      data: ['Cheese', 'Ice cream'],
    },
  ];

  return (
    <View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title}}) => (
            <Text style={{fontSize: 25}}>{title}</Text>
        )}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'yellow', padding: 20, marginVertical: 8}}>
            <Text style={{fontSize: 24}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SectionListComponent;
