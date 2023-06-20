import {View, Text} from 'react-native';
import React, {Component, useState, createContext} from 'react';
import SecondComponent from './components/SecondComponent';
import {ProductContext, UserContext} from './components/AppContext';
import Header from './components/Header';

// const UseContext = () => {
//     const [user, setUser] = useState('Abc');
//   return (
//     <View style={{marginTop: 20}}>
//       <Text style={{fontSize: 30}}>UseContext</Text>
//       <Text style={{fontSize: 30}}>{user}</Text>
//       <SecondComponent user={user} />
//     </View>
//   )
// }

// export const UserContext = createContext();
// export const ProductContext = createContext();

class UseContext extends Component {
  constructor(props) {
    super(props);
    this.state = {user: 'Abc', age: 24, screenName: 1};
    this.handleScreenName = this.handleScreenName.bind(this);
  }

  handleScreenName() {
    this.setState(prevState => ({
      screenName: prevState.screenName + 1
    }));
  }
  
  render() {
    return (
      <UserContext.Provider
        //  value={this.state.user}>
        value={{
          user: this.state.user, 
        age: this.state.age,
        screenName: this.state.screenName,
        handleScreenName: this.handleScreenName,
        }}>
        <ProductContext.Provider value={'#8545245624'}>
          <>
            <Header />
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 30}}>UseContext</Text>
              <Text style={{fontSize: 30}}>Hello Entry{this.state.user}</Text>
              <SecondComponent />
            </View>
          </>
        </ProductContext.Provider>
      </UserContext.Provider>
    );
  }
}
export default UseContext;
