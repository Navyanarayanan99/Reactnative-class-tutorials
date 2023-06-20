import {View, Text} from 'react-native';
import React, {useState, Component, useContext} from 'react';
//import {ProductContext} from '../UseContext';
import FourthComponent from './FourthComponent';
import { ProductContext, UserContext } from './AppContext';
// const ThirdComponent = props => {
//   const {user} = props;
//   return (
//     <View style={{marginTop: 20}}>
//       <Text style={{fontSize: 30}}>ThirdComponent = {user} </Text>
//     </View>
//   );
// };

// class ThirdComponent extends Component {
//   render() {
//     return (
//       // <ProductContext.Provider>
//       <ProductContext.Consumer>
//         {product => {
//           return (
//             <View style={{marginTop: 20}}>
//               <Text style={{fontSize: 20}}>
//                 ThirdComponent {product}
//                 {/* = {this.props.props}{' '} */}
//               </Text>
//               <FourthComponent />
//             </View>
//           );
//         }}

//         {/* </ProductContext.Provider> */}
//       </ProductContext.Consumer>
//     );
//   }
// }


const ThirdComponent = () => {
  const productId = useContext(ProductContext);
  const userDetails = useContext(UserContext);
  return(
    <View style={{marginTop: 20}}>
    <Text style={{fontSize: 20}}>
      ThirdComponent {productId}
    </Text>
    <Text>{userDetails.age}</Text>
    <Text>{userDetails.user}</Text>
    <FourthComponent />
  </View>
  )
}
export default ThirdComponent;
