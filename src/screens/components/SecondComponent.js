import {View, Text} from 'react-native';
import React, {useState, Component, useContext, useEffect} from 'react';
import ThirdComponent from './ThirdComponent';
//import {UserContext} from '../UseContext';
import {UserContext} from './AppContext';

// const SecondComponent = (props) => {
//     const {user} = props;
//   return (
//     <View style={{marginTop: 20}}>
//       <Text style={{fontSize: 30}}>SecondComponent = {user} </Text>
//       <ThirdComponent user={user}/>
//     </View>
//   )
// }

// class SecondComponent extends Component {
//   render() {
//     return (
//       // <UserContext.Consumer>
//       //   {user => {
//       //     console.log('user from context', user);
//       //     return (
//             <View style={{marginTop: 20}}>
//               <Text style={{fontSize: 30}}>SecondComponent</Text>
//               <ThirdComponent
//               // user={user}
//                 />
//             </View>
//       //     );
//       //   }}
//       // </UserContext.Consumer>
//     );
//   }
// }

const SecondComponent = () => {
  const user = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      user.handleScreenName();
    }, 1000);
  }, []);
  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontSize: 30, color: 'red'}}>
        Second Component= {user.screenName}{' '}
      </Text>
      <ThirdComponent />
    </View>
  );
};
export default SecondComponent;
