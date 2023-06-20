import {View, Text} from 'react-native';
import React, {useState, Component, useContext} from 'react';
import ThirdComponent from './ThirdComponent';
//import {ProductContext, UserContext} from '../UseContext';
import { UserContext } from './AppContext';
import { ProductContext } from './AppContext';

// const SecondComponent = (props) => {
//     const {user} = props;
//   return (
//     <View style={{marginTop: 20}}>
//       <Text style={{fontSize: 30}}>SecondComponent = {user} </Text>
//       <ThirdComponent user={user}/>
//     </View>
//   )
// }

// class FourthComponent extends Component {
//   render() {
//     return (
//       <UserContext.Consumer>
//         {data => {
//           console.log('data from context', data);
//           return (
//             <ProductContext.Consumer>
//               {product => {
//                 return (
//                   <View style={{marginTop: 20}}>
//                     <Text style={{fontSize: 30}}>
//                       FourthComponent = {data.user} {data.age}
//                     </Text>
//                     <Text style={{fontSize: 30}}>Product Id: {product}</Text>
//                   </View>
//                 );
//               }}
//             </ProductContext.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//     );
//   }
// }

const FourthComponent = () => {
    const productId = useContext(ProductContext);
    const userDetails = useContext(UserContext);
    return(
        <View style={{marginTop: 20}}>
        <Text style={{fontSize: 30}}>
          FourthComponent = {userDetails.user} {userDetails.age}
        </Text>
        <Text style={{fontSize: 30}}>Product Id: {productId}</Text>
      </View>
    )
}
export default FourthComponent;
