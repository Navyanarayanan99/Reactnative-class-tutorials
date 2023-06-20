import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {
  NavigationContainer,
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Drawer from './Drawer';

const Stack = createNativeStackNavigator();

const Home = props => {
  //   const {navigation} = props;
  const [name, setName] = useState('');
  useEffect(() => {
    setName('XYZ');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'green'}}>Home - XYZ</Text>
      <Button
        {...props}
        //name={name}
        onPress={() =>
          props.navigation.navigate('ProfileScreen', {Myname: name})
        }
      />
    </View>
  );
};

const Button = ({navigation, route, name, onPress}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
      onPress={onPress}
      //onPress={() => navigation.navigate('ProfileScreen', {Myname: name})}
    >
      <Text style={{color: '#fff', fontSize: 17}}>Button</Text>
    </TouchableOpacity>
  );
};

const ProfileScreen = ({navigation, route}) => {
  const name = route.params.Myname;
  const isFocused = useIsFocused();
  //console.warn(isFocused);
  return (
    <View>
      <Text>
        Hai {name} {isFocused ? 'You are focused to profile screen' : ''}
      </Text>
      <ProfileImage />
      <TouchableOpacity
        style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
        onPress={() => navigation.goBack()}>
        <Text style={{color: '#fff', fontSize: 17}}>GoBack</Text>
        <Button onPress={() => navigation.navigate('Settings')} />
      </TouchableOpacity>
    </View>
  );
};

const ProfileImage = () => {
  const route = useRoute();
  const name = route.params.Myname;
  return (
    <View>
      <Text>Hai {name}</Text>
    </View>
  );
};

const Settings = ({navigation}) => {
  const [count, setCount] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      setCount(count + 1);
      //   setInterval(() => {
      //     setCount(count + 1);
      //   }, 1000);
      //   return clearInterval();
    }, []),
  );
  return (
    <View style={{backgroundColor: '#000', padding: 10, margin: 10}}>
      <Text style={{color: '#fff', fontSize: 17}}>Hii - {count}</Text>
      <Button onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const Cart = () => {
  return (
    <View style={{backgroundColor: '#000', padding: 10, margin: 10}}>
      <Text style={{color: '#fff', fontSize: 17}}>Hii </Text>
    </View>
  );
};

// class Button extends Component {
//   render() {
//     const {navigation, name} = this.props; //or
//    // const navigation = this.props.navigation
//     return (
//       <TouchableOpacity style={{backgroundColor: '#f4511e' , padding: 10, margin: 10}}
//       onPress={() => navigation.navigate('ProfileScreen', {Myname: name})}
//       >
//         <Text style={{color: '#fff', fontSize: 17}}>Button</Text>
//       </TouchableOpacity>
//     );
//   }
// }

// class ProfileScreen extends Component{
//     render(){
//         //console.warn(this.props.route)
//         const name = this.props.route.params.Myname;
//         return(
//             <View>
//                 <Text>Hai {name}</Text>
//                 </View>
//         )
//     }
// }

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => {
                return <Text style={{color: '#fff'}}>Right</Text>;
              },
              headerLeft: () => {
                return (
                  <Text style={{color: '#fff', marginRight: 20}}>Left</Text>
                );
              },
            }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              headerRight: () => {
                return <Text style={{color: '#fff'}}>Right</Text>;
              },
              headerLeft: () => {
                return (
                  <Text style={{color: '#fff', marginRight: 20}}>Left</Text>
                );
              },
            }}
          />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Drawer" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigation;

// import {View, Text, TouchableOpacity} from 'react-native';
// import React, {Component} from 'react';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// class InitialComponent extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render () {
//         return(
//             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                  <Text>Initial Screen</Text>
//                  <TouchableOpacity style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
//                  onPress={() => this.props.navigation.navigate('FirstScreen')}
//                  >
//                     <Text style={{color: '#fff'}}>Go to second screen</Text>
//                  </TouchableOpacity>
//             </View>
//         )
//     }
// }

// const FirstScreen = () => {
//     const navigation = useNavigation();
//     return (
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text style={{fontSize: 30, color: 'green'}}>FirstScreen</Text>
//             <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}
//             style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
//             >
//                 <Text style={{color: '#fff'}}>Go to next Page</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const SecondScreen = ({navigation}) => {
//     return (
//         <View>
//             <Text>SecondScreen</Text>
//             <TouchableOpacity onPress={() => navigation.goBack()}
//             style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
//             >
//                 <Text style={{color: '#fff'}}>Go back</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
// class Navigation extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{
//             headerStyle: {
//                 backgroundColor: 'blue'
//             },
//             headerTintColor: '#fff',
//             headerTitleAlign: 'left',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 18
//             }

//         }}>

// <Stack.Screen name='InitialComponent' component={InitialComponent}
//             options={{
//                 //headerShown: false,
//                 title: 'Hello'
//             }}
//             />
//             <Stack.Screen name='FirstScreen' component={FirstScreen}
//             options={{
//                 //headerShown: false,
//                 title: 'Hello'
//             }}
//             />
//             <Stack.Screen name='SecondScreen' component={SecondScreen}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
// export default Navigation;
