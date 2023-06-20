import {View, Text} from 'react-native';
import React from 'react';
import ClassComponent from './src/screens/ClassComponent';
import UseEffect from './src/screens/UseEffect';
import StateAndProps from './src/screens/StateAndProps';
import LifeCycleMethod from './src/screens/LifeCycleMethod';
import UseState from './src/screens/UseState';
import UseReducer from './src/screens/UseReducer';
import ReactMemoandCallback from './src/screens/ReactMemoandCallback';
import PureComponent from './src/screens/PureComponent';
import ReactMemo from './src/screens/ReactMemo';
import Usememo from './src/screens/Usememo';
import UseRef from './src/screens/UseRef';
import EsSix from './src/screens/Es6';
import UseContext from './src/screens/UseContext';
import Navigation from './src/Navigation';
import Drawer from './src/Drawer';
import EntryPoint from './src/screens/UseRef';

import TextInputComponent from './src/TextInputComponent';
import ScrollViewComponent from './src/ScrollViewComponent';
import FlatListComponent from './src/FlatListComponent';
import SectionListComponent from './src/SectionListComponent';
import TouchComponent from './src/TouchComponent';
const App = () => {
  return (
    <View style={{flex: 1}}>
    <TouchComponent />
           {/* <ScrollViewComponent /> */}
    </View>
  );
};

export default App;

// // var userInput = prompt("Please enter your name:");
// // console.log("Hello, " + userInput + "!");

// // 1) Create a variable, add, and assign it the sum of a and b.
// // let a = 5;
// // let b = 3;
// // let add = a + b;
// // console.log(add);

// // // 2) Create a variable, sub, and assign it result of y subtracted from x.
// // let x = 10;
// // let y = 4;
// // let sub = x - y;
// // console.log(sub);

// // // 3) Create a variable, mul, and assign it the product of x and y.
// // let mul = x * y;
// // console.log(mul);

// // // 4) Create a variable, div, and assign it the result of a divided by b.
// // let div = a / b;
// // console.log(div);

// // // 5) Create a variable, inc, and assign it the preincremented value of i.
// // let i = 7;
// // let inc = ++i;
// // console.log(inc);

// // // 6) Create a variable, dec, and assign it the predecremented value of d.
// // let d = 12;
// // let dec = --d;
// // console.log(dec);

// // // 7) Create a variable a and b and assign 2 values and create another variable and check whether both values are equal or not.
// // let num1 = 10;
// // let num2 = 20;
// // let areEqual = num1 === num2;
// // console.log(areEqual);

// // // 8) Create a variable a and b and assign integer values for a and string for b and check whether both values are equal or not.
// // let a = 5;
// // let b = "5";
// // let areEqual = a == b;
// // console.log(areEqual);

// // // 9) Using !== operation print a value true.
// // let value1 = 10;
// // let value2 = "10";
// // let notEqual = value1 !== value2;
// // console.log(notEqual);

// // // 10) Print a false value using > operator.
// // let value3 = 5;
// // let value4 = 10;
// // let isFalse = value3 > value4;
// // console.log(isFalse);

//  var i = 21;
// var n = 0;
// while(i > 10) {
//     i += 2;
//     console.log(i)
// }


