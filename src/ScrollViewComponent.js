import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useRef, useState} from 'react';

const ScrollViewComponent = () => {
  const scrollRef = useRef(null);

  const handleScrollToTop = () => {
    //scrollRef.current.scrollTo({y: 100});
  };
  
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      if (scrollRef.current) {
        scrollRef.current.scrollToEnd();
      }
    }, 5000);
  };

  return (
    <ScrollView
    ref={scrollRef}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['yellow', 'red', 'green']}
          progressBackgroundColor={'green'}
        />
      }
   
      // horizontal
      // showsHorizontalScrollIndicator={false}
      //onScroll={event => console.warn(event.dispatchConfig)}
      //onScrollBeginDrag={event => console.warn(event.dispatchConfig)}
    >
      <View style={{width: 400, height: 400, backgroundColor: 'red'}}></View>
      <View style={{width: 400, height: 400, backgroundColor: 'green'}}></View>
      <View style={{width: 400, height: 400, backgroundColor: 'blue'}}></View>
      <View style={{width: 400, height: 400, backgroundColor: 'gray'}}></View>
      <TouchableOpacity onPress={handleScrollToTop}>
        <Text>Scroll to top</Text>
      </TouchableOpacity>
      <View style={{width: 400, height: 400, backgroundColor: 'black'}}></View>
      <View style={{width: 400, height: 400, backgroundColor: 'red'}}></View>
    </ScrollView>
  );
};

export default ScrollViewComponent;
