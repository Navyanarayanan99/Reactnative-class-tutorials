

//Common Actions => navigate,
// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import { CommonActions } from '@react-navigation/native';

// const Home = ({navigation, route}) => {
//   const handleNavigate = () => {
//     navigation.dispatch(CommonActions.navigate('Notification'));
//   }
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 20}}>{route.name}</Text>
//       <TouchableOpacity
//       onPress={handleNavigate}
//         style={{
//           backgroundColor: 'blue',
//           padding: 15,
//           margin: 10,
//           borderRadius: 10,
//         }}>
//         <Text style={{fontSize: 15, color: '#fff'}}>
//           Navigate to notifications
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;

//Reset
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

const Home = ({navigation, route}) => {
  const handleNavigate = () => {
    // navigation.dispatch(CommonActions.reset ({
    //   index: 1,
    //   routes: [
    //     {
    //       name: 'Notification',
    //     }
    //   ]
    // })
    // );

    navigation.dispatch(
      StackActions.replace('Notification',{
        user : 'ABC'
      }),
    );
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>{route.name}</Text>
      <TouchableOpacity
      onPress={handleNavigate}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 15, color: '#fff'}}>
          Reset to notifications
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

